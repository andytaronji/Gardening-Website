@echo off
echo Running PowerShell script to prepare files for Vercel deployment...
powershell -ExecutionPolicy Bypass -File "%~dp0prepare-for-vercel-with-images.ps1"
echo.
echo Script completed. Press any key to exit.
pause > nul
