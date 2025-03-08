@echo off
echo Preparing Next.js project for Vercel upload...
powershell -ExecutionPolicy Bypass -File "%~dp0prepare-for-vercel.ps1"
echo.
echo Script completed. Press any key to exit.
pause > nul
