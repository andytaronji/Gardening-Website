# Vercel Deployment Instructions

This guide will help you deploy your Next.js application to Vercel and set up a redirect from Hostinger.

## Preparing Your Files

I've created two scripts to help you prepare your files for Vercel:

1. **prepare-for-vercel.bat** - A simple batch file you can double-click to run the preparation script
2. **prepare-for-vercel.ps1** - The PowerShell script that does the actual work

### What These Scripts Do

The scripts will:

1. Create a copy of your project with only the necessary files for Vercel
2. Exclude unnecessary files like `node_modules`, `.next`, and environment files
3. Create a zip file of the prepared files

### Running the Script

Simply double-click the `prepare-for-vercel.bat` file. This will:

1. Create a new directory at `C:\Users\aetar\Desktop\Gardening Website Code\gardening-platform-for-vercel`
2. Copy all necessary files to this directory
3. Create a zip file at `C:\Users\aetar\Desktop\Gardening Website Code\gardening-platform-for-vercel.zip`

## Deploying to Vercel

### Option 1: Using the Vercel Dashboard (Recommended)

1. Go to [Vercel](https://vercel.com) and sign up/sign in
2. Click "Add New..." and select "Project"
3. Select "Upload" from the options
4. Drag and drop the zip file created by the script
5. Vercel will automatically detect it's a Next.js project
6. Configure your project:
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: ./
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.next` (default)
   - **Environment Variables**: Add any environment variables your app needs

7. Click "Deploy"

### Option 2: Using the Vercel CLI

If you prefer using the command line:

1. Install the Vercel CLI: `npm i -g vercel`
2. Navigate to your prepared project directory: `cd C:\Users\aetar\Desktop\Gardening Website Code\gardening-platform-for-vercel`
3. Run `vercel` and follow the prompts

## Environment Variables

If your application uses environment variables (like API keys), you'll need to add them in the Vercel dashboard:

1. Go to your project in the Vercel dashboard
2. Click on "Settings"
3. Go to "Environment Variables"
4. Add each variable from your `.env.local` file

## Custom Domain (Optional)

If you have a custom domain:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS settings

## Troubleshooting

If you encounter any issues:

1. Check the build logs in the Vercel dashboard
2. Ensure all required environment variables are set
3. Make sure your project doesn't have any server-side code that's incompatible with Vercel

## Next Steps

After deployment, Vercel will provide you with a URL where your site is live (like `https://gardening-platform.vercel.app`).

Any future updates can be deployed by:
1. Running the preparation script again
2. Uploading the new zip file to Vercel

## Using Hostinger with Vercel

I've created an `index.html` file that you can upload to your Hostinger hosting. This file will:

1. Display a loading screen with your branding
2. Automatically redirect visitors to your Vercel-hosted application after 5 seconds
3. Provide a button for manual redirection if the automatic redirect doesn't work

### How to Use the Hostinger Redirect

1. Upload the `index.html` file to the root directory of your Hostinger hosting
2. Edit the file to replace `https://gardening-platform.vercel.app` with your actual Vercel deployment URL
   - You'll need to change this in two places in the file (look for the comments)
3. If you want to customize the appearance, you can modify the CSS in the `<style>` section

This approach allows you to:
- Use your Hostinger domain name
- Host your actual application on Vercel where it can use all the Next.js features
- Provide a seamless experience for your users

### Additional Hostinger Configuration

If you have a custom domain on Hostinger, you might want to:
1. Set up a CNAME record pointing to your Vercel deployment
2. Configure Vercel to use your custom domain

Alternatively, you can just use the redirect approach with the index.html file.
