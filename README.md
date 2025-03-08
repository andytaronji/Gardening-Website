# Gardening Platform Deployment Tools

This repository contains tools and instructions to help you deploy your Next.js Gardening Platform application to Vercel, set up a redirect from Hostinger, and push your code to GitHub using Git LFS.

## Files Included

- **index.html**: A redirect page to upload to Hostinger that will redirect visitors to your Vercel-hosted application.

- **prepare-for-vercel.bat**: A Windows batch file you can double-click to run the preparation script.

- **prepare-for-vercel.ps1**: A PowerShell script that prepares your Next.js project for Vercel deployment by:
  - Creating a copy with only the necessary files
  - Excluding node_modules, .next, and other large/unnecessary files
  - Creating a zip file ready for upload to Vercel

- **setup-git-lfs.bat**: A Windows batch file you can double-click to set up Git LFS for your project.

- **setup-git-lfs.ps1**: A PowerShell script that sets up Git LFS for your project by:
  - Installing and configuring Git LFS
  - Setting up tracking for large file types (images, videos, etc.)
  - Creating a proper .gitignore file
  - Providing instructions for pushing to GitHub

- **vercel-deployment-instructions.md**: Detailed instructions for:
  - Preparing your files for Vercel
  - Deploying to Vercel
  - Setting up environment variables
  - Configuring custom domains
  - Using the Hostinger redirect

## Quick Start

1. **For Vercel Deployment**:
   - Double-click `prepare-for-vercel.bat`
   - Follow the instructions in `vercel-deployment-instructions.md`

2. **For Hostinger**:
   - Upload `index.html` to your Hostinger hosting
   - Edit the file to replace the Vercel URL with your actual deployment URL

3. **For GitHub with Git LFS**:
   - Double-click `setup-git-lfs.bat`
   - Follow the on-screen instructions to set up Git LFS
   - Create a GitHub repository and push your code

## Why This Approach?

Your Next.js application has server-side features (API routes, authentication, etc.) that won't work on Hostinger's Business Web Hosting plan. This solution:

- Hosts your full-featured application on Vercel (which supports all Next.js features)
- Uses a simple redirect from your Hostinger domain to the Vercel-hosted application
- Uses Git LFS to handle large files when pushing to GitHub
- Provides a seamless experience for your users

## About Git LFS

Git LFS (Large File Storage) is an extension for Git that replaces large files with text pointers inside Git, while storing the file contents on a remote server. This allows you to:

- Work with large files in your repository without hitting GitHub's file size limits
- Keep your repository size manageable
- Improve Git performance when working with large files

The `setup-git-lfs.bat` script will configure Git LFS to track common large file types like images, videos, and PDFs.

## Need Help?

- For Vercel deployment: Refer to `vercel-deployment-instructions.md`
- For Git LFS: Refer to `github-lfs-instructions.md` or run the `setup-git-lfs.bat` script and follow the on-screen instructions
