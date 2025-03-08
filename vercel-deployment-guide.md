# Vercel Deployment Guide for Gardening Website

This guide explains how to deploy your Next.js gardening website to Vercel, ensuring all images are properly included.

## The Problem

When using Git LFS (Large File Storage) for managing images and other large files, Vercel deployments may not correctly include these files. This is because Vercel pulls from your Git repository, but doesn't automatically fetch LFS files.

## The Solution

We've created scripts that prepare your project for Vercel deployment by:

1. Creating a copy of your project without Git LFS tracking
2. Including all image files directly (not as LFS pointers)
3. Creating a zip file that can be uploaded to Vercel

## How to Deploy

### Option 1: Using the Batch File (Easiest)

1. Double-click the `prepare-for-vercel-with-images.bat` file
2. Wait for the script to complete
3. Follow the deployment instructions displayed in the console

### Option 2: Using PowerShell

1. Open PowerShell
2. Navigate to your project directory
3. Run: `.\prepare-for-vercel-with-images.ps1`
4. Follow the deployment instructions displayed in the console

### Deployment Steps

After running either script:

1. Go to [Vercel](https://vercel.com) and sign in
2. Click "Add New..." and select "Project"
3. Select "Upload" from the options
4. Drag and drop the zip file (`gardening-platform-for-vercel.zip`)
5. Configure your project:
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: ./
   - Build Command: next build (default)
   - Output Directory: .next (default)
6. Click "Deploy"

## Adding New Images in the Future

When you need to add new images to your website:

1. Add the images to the appropriate directory in your local project
2. Run the preparation script again to create a new deployment package
3. Upload the new package to Vercel

This approach ensures all images will be properly included in your deployment, regardless of how they're stored in your Git repository.

## Files Included

- `prepare-for-vercel-with-images.ps1` - PowerShell script that prepares the project
- `prepare-for-vercel-with-images.bat` - Batch file wrapper for the PowerShell script
- `gardening-platform-for-vercel/` - Directory containing the prepared project
- `gardening-platform-for-vercel.zip` - Zip file ready for upload to Vercel
