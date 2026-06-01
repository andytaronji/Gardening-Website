# Gardening Website

This is the Gardening Thyme website project, built with Next.js and ready for deployment to Vercel.

## Automatic Deployment

This project is set up for automatic deployment to Vercel when changes are pushed to the main branch of the GitHub repository. No manual deployment steps are required.

## Environment Variables

For the contact form to work properly, the following environment variables need to be set in the Vercel project settings:

- `SMTP_HOST`: SMTP server host (e.g., smtp.hostinger.com)
- `SMTP_PORT`: SMTP server port (e.g., 465)
- `SMTP_USER`: SMTP username/email
- `SMTP_PASSWORD`: SMTP password

**Important**: Never commit sensitive information like SMTP credentials to the repository. The `.env` and `.env.local` files are included in `.gitignore` to prevent accidental commits.

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

## Adding New Images

When adding new images to your website:

1. Add the images to the appropriate directory in your local project
2. Commit and push the changes to GitHub
3. Vercel will automatically deploy the updated site

## Local Development

To run the project locally:

1. Clone the repository
2. Create a `.env.local` file with the required environment variables (see `.env.example`)
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server
5. Open [http://localhost:3000](http://localhost:3000) in your browser
