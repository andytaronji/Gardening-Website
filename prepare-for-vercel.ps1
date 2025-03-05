# Script to prepare Next.js project for Vercel upload
# This script creates a copy of your project with only the necessary files for Vercel

# Configuration
$sourceDir = "C:\Users\aetar\Desktop\Gardening Website Code\gardening-platform"
$targetDir = "C:\Users\aetar\Desktop\Gardening Website Code\gardening-platform-for-vercel"
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
    "tsconfig.json",
    "README.md",
    "README-CALENDAR.md",
    "README-JSX.md",
    ".env.local.example"
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
    ".env.production.local"
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

# Create zip file if requested
if ($createZip) {
    $zipPath = "C:\Users\aetar\Desktop\Gardening Website Code\gardening-platform-for-vercel.zip"
    
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
Write-Host "`nUpload these files to Vercel to deploy your Next.js application."
