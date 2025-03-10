# Script to set up Git LFS (Large File Storage) for the gardening platform project
# This script helps you push large repositories to GitHub

# Configuration
$projectDir = "C:\Users\aetar\Desktop\Gardening Website Code\gardening-platform"
$repoName = "gardening-platform"
$userName = "your-github-username" # Replace with your GitHub username

# Check if Git is installed
try {
    $gitVersion = git --version
    Write-Host "Git is installed: $gitVersion"
} catch {
    Write-Host "Git is not installed or not in PATH. Please install Git first." -ForegroundColor Red
    Write-Host "Download Git from: https://git-scm.com/downloads"
    exit 1
}

# Check if Git LFS is installed
try {
    $lfsVersion = git lfs version
    Write-Host "Git LFS is installed: $lfsVersion"
} catch {
    Write-Host "Git LFS is not installed. Installing Git LFS..." -ForegroundColor Yellow
    
    # Provide instructions for installing Git LFS
    Write-Host "Please install Git LFS by following these steps:" -ForegroundColor Yellow
    Write-Host "1. Download Git LFS from https://git-lfs.github.com/" -ForegroundColor Yellow
    Write-Host "2. Run the installer" -ForegroundColor Yellow
    Write-Host "3. After installation, run this script again" -ForegroundColor Yellow
    
    $installNow = Read-Host "Would you like to open the Git LFS download page now? (y/n)"
    if ($installNow -eq "y") {
        Start-Process "https://git-lfs.github.com/"
    }
    
    exit 1
}

# Navigate to project directory
Set-Location -Path $projectDir
Write-Host "Changed directory to: $projectDir"

# Create or update .gitignore file
$gitignorePath = Join-Path -Path $projectDir -ChildPath ".gitignore"
$gitignoreContent = @"
# Dependencies
/node_modules

# Next.js build output
/.next
/out

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Debug logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE files
.idea
.vscode
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db
"@

Set-Content -Path $gitignorePath -Value $gitignoreContent
Write-Host "Created/updated .gitignore file"

# Initialize Git repository if not already initialized
if (-not (Test-Path -Path (Join-Path -Path $projectDir -ChildPath ".git"))) {
    git init
    Write-Host "Initialized Git repository"
} else {
    Write-Host "Git repository already initialized"
}

# Set up Git LFS
git lfs install
Write-Host "Initialized Git LFS"

# Track large file types with Git LFS
$fileTypesToTrack = @(
    "*.jpg", "*.jpeg", "*.png", "*.gif", "*.webp", # Images
    "*.mp4", "*.mov", "*.avi", "*.webm",           # Videos
    "*.pdf", "*.psd", "*.ai",                      # Documents and design files
    "*.zip", "*.rar", "*.7z",                      # Archives
    "*.ttf", "*.otf", "*.woff", "*.woff2"          # Fonts
)

foreach ($fileType in $fileTypesToTrack) {
    git lfs track $fileType
    Write-Host "Tracking $fileType with Git LFS"
}

# Create .gitattributes file (Git LFS uses this to track files)
git add .gitattributes
Write-Host "Added .gitattributes to Git"

# Instructions for the user
Write-Host "`nGit LFS setup complete!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Create a new repository on GitHub: https://github.com/new" -ForegroundColor Cyan
Write-Host "2. Name it: $repoName" -ForegroundColor Cyan
Write-Host "3. Run the following commands to push your repository:" -ForegroundColor Cyan
Write-Host "   git add ." -ForegroundColor Yellow
Write-Host "   git commit -m 'Initial commit with Git LFS'" -ForegroundColor Yellow
Write-Host "   git remote add origin https://github.com/$userName/$repoName.git" -ForegroundColor Yellow
Write-Host "   git branch -M main" -ForegroundColor Yellow
Write-Host "   git push -u origin main" -ForegroundColor Yellow

Write-Host "`nImportant Git LFS tips:" -ForegroundColor Magenta
Write-Host "- Always run 'git lfs track <file-pattern>' before adding new types of large files" -ForegroundColor Magenta
Write-Host "- Use 'git lfs status' to see which files are being tracked by Git LFS" -ForegroundColor Magenta
Write-Host "- If you have issues with file size limits, try pushing in smaller commits" -ForegroundColor Magenta

# Offer to create a GitHub repository automatically
$createRepo = Read-Host "`nWould you like to create a GitHub repository and push your code now? (y/n)"
if ($createRepo -eq "y") {
    Write-Host "`nTo create a GitHub repository automatically, you'll need to:" -ForegroundColor Yellow
    Write-Host "1. Install the GitHub CLI (gh): https://cli.github.com/" -ForegroundColor Yellow
    Write-Host "2. Authenticate with 'gh auth login'" -ForegroundColor Yellow
    Write-Host "3. Then run:" -ForegroundColor Yellow
    Write-Host "   gh repo create $repoName --private --source=. --remote=origin --push" -ForegroundColor Yellow
    
    $installGH = Read-Host "Would you like to open the GitHub CLI download page? (y/n)"
    if ($installGH -eq "y") {
        Start-Process "https://cli.github.com/"
    }
}
