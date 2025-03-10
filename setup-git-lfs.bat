@echo off
echo Setting up Git LFS for your project...
powershell -ExecutionPolicy Bypass -File "%~dp0setup-git-lfs.ps1"
echo.
echo Script completed. Press any key to exit.
pause > nul
