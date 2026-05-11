@echo off
echo ================================
echo   Git Push - Hat Sanat Projesi
echo ================================
cd /d "C:\Users\haka3\Desktop\Webseite hat"
git add .
git commit -m "update: Webseite aktualisiert"
git push
echo.
echo ================================
echo   Fertig! Vercel deployed jetzt.
echo ================================
pause
