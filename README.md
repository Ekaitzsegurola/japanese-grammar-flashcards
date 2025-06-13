# Flashcards Gramática Japonesa JLPT

Una aplicación Progressive Web App (PWA) para estudiar gramática japonesa del JLPT usando flashcards.

## Características

- ✅ Importación de archivos CSV con entradas de gramática
- ✅ Flashcards interactivas con toque para voltear
- ✅ Filtrado por niveles JLPT (N5-N1)
- ✅ Funcionalidad offline completa
- ✅ Instalable como aplicación nativa en Android
- ✅ Guarda progreso automáticamente
- ✅ Mezcla aleatoria de tarjetas
- ✅ Exportación de datos
- ✅ Diseño optimizado para tablets

## Instalación Rápida

### Opción 1: PWA2APK (Recomendado - 5 minutos)

1. **Subir a GitHub Pages:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/japanese-grammar-flashcards.git
   git push -u origin main
   ```

2. **Activar GitHub Pages:**
   - Ve a Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Save

3. **Generar APK:**
   - Espera 5 minutos a que se publique
   - Ve a https://pwa2apk.com
   - Introduce tu URL: `https://TU_USUARIO.github.io/japanese-grammar-flashcards`
   - Descarga el APK generado

4. **Instalar en tablet:**
   - Transfiere el APK a tu tablet
   - Habilita "Instalar desde fuentes desconocidas"
   - Instala el APK

### Opción 2: Instalación directa desde Chrome

1. Abre Chrome en tu tablet
2. Ve a tu URL de GitHub Pages
3. Toca el menú de tres puntos
4. Selecciona "Añadir a pantalla de inicio"
5. Confirma la instalación

## Formato del CSV

El sistema acepta múltiples formatos de CSV:

### Formato 1 (JLPT Sensei):
```csv
N5,1,ちゃいけない,cha ikenai,must not do (spoken Japanese),,,,,,
N5,2,だ・です,da / desu,"to be (am, is, are, were, used to)",,,,,,
```

### Formato 2 (Bunpro):
```csv
N5,1,だ,"To be, Is",https://bunpro.jp/grammar_points/だ
N5,2,です,"To be, Is",https://bunpro.jp/grammar_points/です
```

### Formato 3 (Con encabezados):
```csv
level,number,term,romanization,meaning,url
N5,1,だ,da,to be,https://example.com
```

## Desarrollo Local

### Requisitos
- Un editor de texto (VS Code, Notepad++, etc.)
- Python (para servidor local) o extensión Live Server de VS Code

### Ejecutar localmente:

**Con Python:**
```bash
cd japanese-grammar-flashcards
python -m http.server 8000
# Abre http://localhost:8000
```

**Con Node.js:**
```bash
npx http-server
# Abre http://localhost:8080
```

## Personalización

### Cambiar colores:
Edita en `styles.css`:
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Cambiar idioma de la interfaz:
Edita los textos en `index.html` y `app.js`

### Añadir fuentes japonesas:
Agrega en `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
```

## Generar iconos PNG

Necesitarás convertir `icon.svg` a PNG en estos tamaños:
- 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512

Puedes usar:
- https://cloudconvert.com/svg-to-png
- https://svgtopng.com/
- Cualquier editor de imágenes

## Solución de problemas

### La app no se instala
- Verifica que uses HTTPS (GitHub Pages lo proporciona)
- Asegúrate de que el manifest.json esté correcto
- Comprueba que el service worker se registre

### Los CSV no se importan
- Verifica que el archivo sea UTF-8
- Revisa que tenga el formato correcto
- Prueba con pocas líneas primero

### No funciona offline
- Limpia la caché del navegador
- Reinstala la aplicación
- Verifica en DevTools → Application → Service Workers

## Estructura del proyecto

```
japanese-grammar-flashcards/
├── index.html          # Página principal
├── styles.css          # Estilos
├── app.js             # Lógica de la aplicación
├── manifest.json      # Configuración PWA
├── sw.js              # Service Worker para offline
├── README.md          # Este archivo
└── icons/             # Carpeta de iconos
    └── icon.svg       # Icono base
```

## Próximos pasos

1. **Generar iconos PNG** desde el SVG
2. **Crear repositorio en GitHub**
3. **Activar GitHub Pages**
4. **Generar APK con PWA2APK**
5. **Instalar en tablet**

## Licencia

MIT - Libre para uso personal y comercial

## Créditos

- Alpine.js para reactividad
- Papa Parse para parsing de CSV
- Diseño inspirado en aplicaciones modernas de flashcards