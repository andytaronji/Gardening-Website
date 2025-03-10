# Script to prepare Next.js project for Vercel deployment with images
# This script creates a copy of your project with all images included (no Git LFS)

# Configuration
$sourceDir = "C:\Users\aetar\OneDrive\Desktop\Gardening Website Code\gardening-platform"
$targetDir = "C:\Users\aetar\OneDrive\Desktop\Gardening Website Code\gardening-platform-for-vercel"
$createZip = $true  # Set to $true to create a zip file

# Create target directory if it doesn't exist
if (!(Test-Path -Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir | Out-Null
    Write-Host "Created directory: $targetDir"
} else {
    # Clean target directory if it exists
    Get-ChildItem -Path $targetDir -Recurse | Remove-Item -Force -Recurse
    Write-Host "Cleaned existing directory: $targetDir"
}

# Directories to include
$includeDirs = @(
    "src",
    "public"
)

# Files to include (at root level)
$includeFiles = @(
    "package.json",
    "package-lock.json",
    "next.config.js",
    "postcss.config.js",
    "tailwind.config.js",
    "tsconfig.json"
    # README.md is created separately
)

# Directories to exclude
$excludeDirs = @(
    "node_modules",
    ".next",
    ".git",
    ".vscode",
    "out"
)

# Files to exclude
$excludeFiles = @(
    ".env",
    ".env.local",
    ".env.development.local",
    ".env.test.local",
    ".env.production.local",
    ".gitattributes"  # Exclude Git LFS configuration
)

# Copy directories
foreach ($dir in $includeDirs) {
    $sourcePath = Join-Path -Path $sourceDir -ChildPath $dir
    $targetPath = Join-Path -Path $targetDir -ChildPath $dir
    
    if (Test-Path -Path $sourcePath) {
        # Create the directory structure
        if (!(Test-Path -Path $targetPath)) {
            New-Item -ItemType Directory -Path $targetPath | Out-Null
        }
        
        # Copy all files and subdirectories, excluding specified directories
        Get-ChildItem -Path $sourcePath -Recurse | Where-Object {
            $fullPath = $_.FullName
            $relativePath = $fullPath.Substring($sourcePath.Length + 1)
            $exclude = $false
            
            foreach ($excludeDir in $excludeDirs) {
                if ($relativePath -like "$excludeDir\*" -or $relativePath -eq $excludeDir) {
                    $exclude = $true
                    break
                }
            }
            
            -not $exclude
        } | ForEach-Object {
            $targetFilePath = Join-Path -Path $targetPath -ChildPath $_.FullName.Substring($sourcePath.Length + 1)
            
            if ($_.PSIsContainer) {
                # Create directory
                if (!(Test-Path -Path $targetFilePath)) {
                    New-Item -ItemType Directory -Path $targetFilePath | Out-Null
                }
            } else {
                # Create parent directory if it doesn't exist
                $targetFileDir = Split-Path -Path $targetFilePath -Parent
                if (!(Test-Path -Path $targetFileDir)) {
                    New-Item -ItemType Directory -Path $targetFileDir -Force | Out-Null
                }
                
                # Copy file
                Copy-Item -Path $_.FullName -Destination $targetFilePath -Force
            }
        }
        
        Write-Host "Copied directory: $dir"
    } else {
        Write-Host "Warning: Source directory not found: $dir"
    }
}

# Copy individual files
foreach ($file in $includeFiles) {
    $sourcePath = Join-Path -Path $sourceDir -ChildPath $file
    $targetPath = Join-Path -Path $targetDir -ChildPath $file
    
    if (Test-Path -Path $sourcePath) {
        Copy-Item -Path $sourcePath -Destination $targetPath -Force
        Write-Host "Copied file: $file"
    } else {
        Write-Host "Warning: Source file not found: $file"
    }
}

# Create README.md file with deployment instructions
$readmePath = Join-Path -Path $targetDir -ChildPath "README.md"
$readmeContent = @"
# Gardening Website - Vercel Deployment

This directory contains a prepared version of the Gardening Website project, ready for deployment to Vercel. All images and assets are included directly (not as Git LFS pointers), ensuring they will display correctly when deployed.

## Deployment Instructions

1. Go to [Vercel](https://vercel.com) and sign in
2. Click "Add New..." and select "Project"
3. Select "Upload" from the options
4. Drag and drop the zip file (`gardening-platform-for-vercel.zip`) or upload this entire directory
5. Configure your project:
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: ./
   - Build Command: next build (default)
   - Output Directory: .next (default)
6. Click "Deploy"

## Project Structure

- `/public/images/` - Contains all website images, including:
  - Logo
  - Garden design photos
  - Consultation images
- `/src/` - Contains all source code:
  - Components
  - Pages
  - Styles
  - Data

## Adding New Images in the Future

When you need to add new images to your website:

1. Add the images to the appropriate directory in your local project
2. Run the `prepare-for-vercel-with-images.ps1` script again to create a new deployment package
3. Upload the new package to Vercel

This approach ensures all images will be properly included in your deployment, regardless of how they're stored in your Git repository.
"@

Set-Content -Path $readmePath -Value $readmeContent
Write-Host "Created README.md with deployment instructions"

# Create zip file if requested
if ($createZip) {
    $zipPath = "C:\Users\aetar\OneDrive\Desktop\Gardening Website Code\gardening-platform-for-vercel.zip"
    
    # Remove existing zip if it exists
    if (Test-Path -Path $zipPath) {
        Remove-Item -Path $zipPath -Force
    }
    
    # Create zip file
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    [System.IO.Compression.ZipFile]::CreateFromDirectory($targetDir, $zipPath)
    
    Write-Host "Created zip file: $zipPath"
}

Write-Host "`nProject prepared for Vercel upload!"
Write-Host "Files are in: $targetDir"
if ($createZip) {
    Write-Host "Zip file is at: $zipPath"
}

Write-Host "`nTo deploy to Vercel:"
Write-Host "1. Go to https://vercel.com and sign in"
Write-Host "2. Click 'Add New...' and select 'Project'"
Write-Host "3. Select 'Upload' from the options"
Write-Host "4. Drag and drop the zip file"
Write-Host "5. Configure your project:"
Write-Host "   - Framework Preset: Next.js (should be auto-detected)"
Write-Host "   - Root Directory: ./"
Write-Host "   - Build Command: next build (default)"
Write-Host "   - Output Directory: .next (default)"
Write-Host "6. Click 'Deploy'"
Write-Host "`nThis approach ensures all images are included in the deployment."
