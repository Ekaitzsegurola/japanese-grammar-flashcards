// Flashcard App using Alpine.js
function flashcardApp() {
    return {
        cards: [],
        filteredCards: [],
        currentIndex: 0,
        showAnswer: false,
        currentLevel: '',
        showToast: false,
        toastMessage: '',
        
        // Quiz mode properties
        quizMode: false,
        score: 0,
        currentQuestion: {},
        answerChecked: false,
        
        // Initialize the app
        init() {
            // Load saved cards from localStorage
            this.loadFromStorage();
            
            // Register service worker for offline functionality
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js')
                    .then(reg => console.log('Service Worker registered'))
                    .catch(err => console.error('Service Worker registration failed:', err));
            }
        },
        
        // Handle CSV file upload
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (!file) return;
            
            Papa.parse(file, {
                complete: (results) => {
                    this.processCSVData(results.data);
                },
                error: (error) => {
                    this.showNotification('Error al leer el archivo CSV: ' + error.message);
                }
            });
        },
        
        // Process CSV data and normalize fields
        processCSVData(data) {
            const processedCards = [];
            
            data.forEach((row, index) => {
                // Skip empty rows
                if (!row || row.length < 3) return;
                
                // Handle different CSV formats
                let card = {};
                
                // Format 1: N5,1,だ,da,to be...
                if (Array.isArray(row)) {
                    card = {
                        level: row[0] || '',
                        number: row[1] || index,
                        term: row[2] || '',
                        romanization: row[3] || '',
                        meaning: row[4] || '',
                        url: row[5] || ''
                    };
                }
                // Format 2: Object with headers
                else if (typeof row === 'object') {
                    // Try to map common field names
                    card = {
                        level: row.level || row.Level || row.LEVEL || row[0] || '',
                        number: row.number || row.Number || row.id || row[1] || index,
                        term: row.term || row.japanese || row.Japanese || row[2] || '',
                        romanization: row.romanization || row.romaji || row.Romaji || row[3] || '',
                        meaning: row.meaning || row.english || row.English || row.translation || row[4] || '',
                        url: row.url || row.URL || row.link || row[5] || ''
                    };
                }
                
                // Only add cards with at least a term
                if (card.term) {
                    processedCards.push(card);
                }
            });
            
            if (processedCards.length === 0) {
                this.showNotification('No se encontraron tarjetas válidas en el archivo');
                return;
            }
            
            this.cards = processedCards;
            this.filteredCards = [...this.cards];
            this.currentIndex = 0;
            this.showAnswer = false;
            
            // Save to localStorage
            this.saveToStorage();
            
            this.showNotification(`Se importaron ${processedCards.length} tarjetas correctamente`);
        },
        
        // Get current card
        getCurrentCard() {
            return this.filteredCards[this.currentIndex] || null;
        },
        
        // Toggle between question and answer
        toggleCard() {
            this.showAnswer = !this.showAnswer;
        },
        
        // Navigate to next card
        nextCard() {
            this.showAnswer = false;
            this.currentIndex = (this.currentIndex + 1) % this.filteredCards.length;
        },
        
        // Navigate to previous card
        previousCard() {
            this.showAnswer = false;
            this.currentIndex = this.currentIndex === 0 ? 
                this.filteredCards.length - 1 : this.currentIndex - 1;
        },
        
        // Shuffle cards
        shuffleCards() {
            // Fisher-Yates shuffle
            const shuffled = [...this.filteredCards];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            this.filteredCards = shuffled;
            this.currentIndex = 0;
            this.showAnswer = false;
            this.showNotification('Tarjetas mezcladas');
        },
        
        // Filter cards by level
        filterByLevel(level) {
            this.currentLevel = level;
            if (level === '') {
                this.filteredCards = [...this.cards];
            } else {
                this.filteredCards = this.cards.filter(card => 
                    card.level && card.level.toUpperCase() === level.toUpperCase()
                );
            }
            this.currentIndex = 0;
            this.showAnswer = false;
            
            if (this.filteredCards.length === 0) {
                this.showNotification('No hay tarjetas para este nivel');
                this.filteredCards = [...this.cards];
                this.currentLevel = '';
            }
        },
        
        // Quiz Mode Functions
        startQuiz() {
            if (this.filteredCards.length < 4) {
                this.showNotification('Necesitas al menos 4 tarjetas en el nivel seleccionado para iniciar el test.');
                return;
            }
            this.quizMode = true;
            this.score = 0;
            this.generateQuestion();
        },

        exitQuiz() {
            this.quizMode = false;
            this.currentQuestion = {};
            this.answerChecked = false;
        },

        generateQuestion() {
            this.answerChecked = false;
            
            // Get a random card for the correct answer
            const correctCardIndex = Math.floor(Math.random() * this.filteredCards.length);
            const correctCard = this.filteredCards[correctCardIndex];

            // Get three other random cards for incorrect answers
            const incorrectOptions = [];
            while (incorrectOptions.length < 3) {
                const randomIndex = Math.floor(Math.random() * this.filteredCards.length);
                if (randomIndex !== correctCardIndex && !incorrectOptions.some(card => card.term === this.filteredCards[randomIndex].term)) {
                    incorrectOptions.push(this.filteredCards[randomIndex]);
                }
            }

            // Create options array
            const options = [
                { meaning: correctCard.meaning, isCorrect: true, isSelected: false },
                ...incorrectOptions.map(card => ({ meaning: card.meaning, isCorrect: false, isSelected: false }))
            ];
            
            // Shuffle options
            for (let i = options.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [options[i], options[j]] = [options[j], options[i]];
            }

            this.currentQuestion = {
                term: correctCard.term,
                options: options
            };
        },

        checkAnswer(selectedOption) {
            this.answerChecked = true;
            selectedOption.isSelected = true;

            if (selectedOption.isCorrect) {
                this.score++;
                this.showNotification('¡Correcto!');
            } else {
                this.showNotification('Incorrecto.');
            }
        },
        
        nextQuestion() {
            if (this.filteredCards.length < 4) {
                this.showNotification('No hay suficientes tarjetas para la siguiente pregunta.');
                this.exitQuiz();
                return;
            }
            this.generateQuestion();
        },
        
        // Get progress percentage
        getProgress() {
            if (this.filteredCards.length === 0) return 0;
            return ((this.currentIndex + 1) / this.filteredCards.length) * 100;
        },
        
        // Reset progress
        resetProgress() {
            this.currentIndex = 0;
            this.showAnswer = false;
            this.showNotification('Progreso reiniciado');
        },
        
        // Save to localStorage
        saveToStorage() {
            try {
                localStorage.setItem('jlpt-flashcards', JSON.stringify(this.cards));
                localStorage.setItem('jlpt-current-index', this.currentIndex.toString());
                localStorage.setItem('jlpt-current-level', this.currentLevel);
            } catch (e) {
                console.error('Error saving to localStorage:', e);
            }
        },
        
        // Load from localStorage
        loadFromStorage() {
            try {
                const savedCards = localStorage.getItem('jlpt-flashcards');
                if (savedCards) {
                    this.cards = JSON.parse(savedCards);
                    this.filteredCards = [...this.cards];
                    
                    const savedIndex = localStorage.getItem('jlpt-current-index');
                    if (savedIndex) {
                        this.currentIndex = parseInt(savedIndex) || 0;
                    }
                    
                    const savedLevel = localStorage.getItem('jlpt-current-level');
                    if (savedLevel) {
                        this.filterByLevel(savedLevel);
                    }
                }
            } catch (e) {
                console.error('Error loading from localStorage:', e);
            }
        },
        
        // Export data as CSV
        exportData() {
            if (this.cards.length === 0) {
                this.showNotification('No hay datos para exportar');
                return;
            }
            
            const csv = Papa.unparse(this.cards);
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            
            link.setAttribute('href', url);
            link.setAttribute('download', 'jlpt-flashcards-export.csv');
            link.style.visibility = 'hidden';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            this.showNotification('Datos exportados correctamente');
        },
        
        // Import new file
        importNewFile() {
            if (confirm('¿Estás seguro? Esto reemplazará todas las tarjetas actuales.')) {
                this.cards = [];
                this.filteredCards = [];
                this.currentIndex = 0;
                this.showAnswer = false;
                this.currentLevel = '';
                localStorage.removeItem('jlpt-flashcards');
            }
        },
        
        // Show toast notification
        showNotification(message) {
            this.toastMessage = message;
            this.showToast = true;
            setTimeout(() => {
                this.showToast = false;
            }, 3000);
        }
    }
}