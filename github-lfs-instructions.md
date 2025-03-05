# GitHub with Git LFS Instructions

This guide will help you push your large Next.js project to GitHub using Git LFS (Large File Storage).

## What is Git LFS?

Git LFS (Large File Storage) is an extension for Git that replaces large files with text pointers inside Git, while storing the file contents on a remote server. This is perfect for projects with:

- Large image files
- Videos
- Audio files
- PDFs and other documents
- Any large binary files

## Prerequisites

Before you begin, make sure you have:

1. **Git** installed on your computer
2. **Git LFS** installed on your computer (the setup script will help with this)
3. A **GitHub account**

## Setting Up Git LFS

I've created two scripts to help you set up Git LFS:

1. **setup-git-lfs.bat** - A simple batch file you can double-click to run the setup script
2. **setup-git-lfs.ps1** - The PowerShell script that does the actual work

### What These Scripts Do

The scripts will:

1. Check if Git and Git LFS are installed
2. Create a proper `.gitignore` file for your Next.js project
3. Initialize Git LFS
4. Configure Git LFS to track common large file types (images, videos, etc.)
5. Provide instructions for pushing to GitHub

### Running the Script

Simply double-click the `setup-git-lfs.bat` file. The script will:

1. Guide you through the setup process
2. Create/update necessary configuration files
3. Provide next steps for creating a GitHub repository and pushing your code

## Manual Git LFS Setup (If You Prefer)

If you prefer to set up Git LFS manually, follow these steps:

1. **Install Git LFS**:
   - Download from [git-lfs.github.com](https://git-lfs.github.com/)
   - Run the installer

2. **Initialize Git LFS**:
   ```
   cd C:\Users\aetar\Desktop\Gardening Website Code\gardening-platform
   git lfs install
   ```

3. **Track Large File Types**:
   ```
   git lfs track "*.jpg" "*.jpeg" "*.png" "*.gif"
   git lfs track "*.mp4" "*.mov" "*.avi"
   git lfs track "*.pdf" "*.psd"
   git lfs track "*.ttf" "*.otf" "*.woff" "*.woff2"
   ```

4. **Add .gitattributes**:
   ```
   git add .gitattributes
   ```

## Creating a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "gardening-platform")
4. Keep it public or private as you prefer
5. Do NOT initialize with README, .gitignore, or license (since you're pushing an existing project)
6. Click "Create repository"

## Pushing Your Code to GitHub

After running the setup script and creating a GitHub repository, follow these steps:

1. **Add your files to Git**:
   ```
   git add .
   ```

2. **Commit your changes**:
   ```
   git commit -m "Initial commit with Git LFS"
   ```

3. **Add the remote repository**:
   ```
   git remote add origin https://github.com/YOUR-USERNAME/gardening-platform.git
   ```
   (Replace `YOUR-USERNAME` with your GitHub username)

4. **Push to GitHub**:
   ```
   git branch -M main
   git push -u origin main
   ```

## Troubleshooting Large Pushes

If you encounter issues pushing large files:

1. **Push in smaller batches**:
   - Add and commit files in smaller groups
   - Push each commit separately

2. **Check file sizes**:
   - Use `git lfs ls-files` to see which files are being tracked by Git LFS
   - Ensure very large files are being tracked

3. **Verify Git LFS is working**:
   - Use `git lfs status` to check the status of LFS files

4. **Increase Git buffer size**:
   ```
   git config http.postBuffer 524288000
   ```

5. **Check GitHub limits**:
   - GitHub has a file size limit of 100MB per file, even with Git LFS
   - Repository size should ideally stay under 5GB for good performance

## Best Practices for Large Repositories

1. **Keep non-essential large files out of the repository**:
   - Consider using external storage for very large assets
   - Only include files necessary for the project

2. **Use branches effectively**:
   - Create feature branches for new work
   - Keep the main branch clean

3. **Commit regularly**:
   - Make smaller, more frequent commits
   - This makes it easier to track changes and resolve issues

4. **Update Git LFS tracking as needed**:
   - If you add new types of large files, track them with:
   - `git lfs track "*.new-extension"`

## Using Git LFS with Vercel

When deploying to Vercel, Git LFS works seamlessly:

1. Vercel will pull your code from GitHub
2. Git LFS files will be downloaded automatically
3. Your application will be built with all assets available

## Need More Help?

- **Git LFS Documentation**: [git-lfs.github.com](https://git-lfs.github.com/)
- **GitHub Docs on Git LFS**: [docs.github.com/en/repositories/working-with-files/managing-large-files](https://docs.github.com/en/repositories/working-with-files/managing-large-files)
