@echo off
echo Subiendo proyecto a GitHub...
echo.
echo Asegurate de haber creado un repositorio vacio en GitHub primero!
echo.
pause

git remote add origin https://github.com/TU_USUARIO/japanese-grammar-flashcards.git
git branch -M main
git push -u origin main

echo.
echo Proyecto subido correctamente!
echo.
echo Ahora ve a GitHub y activa Pages.
pause