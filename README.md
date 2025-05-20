# Aperture Landing Page

This is a one-page portfolio (landing page) for Alex Johnson, a software company owner, built with Next.js and Tailwind CSS.

## Project Overview

The landing page showcases:
- Owner's profile and expertise.
- Services offered by the company.
- Past projects with dummy data.
- A contact form (linking to mailto).

## Tech Stack

- **Frontend**: Next.js (React)
- **Styling**: Tailwind CSS with ShadCN UI components
- **Language**: TypeScript

This project uses the Next.js App Router, Server Components by default, and is designed to be modern, clean, and fully responsive.

## Getting Started

### Prerequisites

- Node.js (version 18.x or later recommended)
- npm or yarn

### Setup

1.  **Clone the repository (if applicable) or ensure you have the project files.**

2.  **Navigate to the project directory:**
    ```bash
    cd your-project-directory
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

### Running the Development Server

To run the app in development mode:

```bash
npm run dev
# or
# yarn dev
```

Open [http://localhost:9002](http://localhost:9002) (or the port specified in your `package.json` or terminal output) with your browser to see the result.

The page will auto-update as you edit files.

## Building for Production

To create an optimized production build:

```bash
npm run build
# or
# yarn build
```

This command bundles the application for production usage.

## Running in Production Mode

After building, you can start the application in production mode:

```bash
npm run start
# or
# yarn start
```

## Deployment

This Next.js application can be easily deployed to platforms like:

-   **Vercel**: The creators of Next.js offer seamless deployment. Connect your Git repository to Vercel for automatic deployments.
-   **Netlify**: Similar to Vercel, Netlify provides easy deployment for Next.js apps.
-   **Render**: Render supports Node.js applications, and you can configure it to serve your Next.js app.
-   Other Node.js hosting providers.

Typically, you would connect your Git provider (GitHub, GitLab, Bitbucket) to one of these platforms, and they will build and deploy your application automatically on push/merge to the main branch.

## Project Structure

-   `src/app/`: Contains the core application files using Next.js App Router.
    -   `page.tsx`: The main entry point for the landing page.
    -   `layout.tsx`: The root layout for the application.
    -   `globals.css`: Global styles and Tailwind CSS setup.
-   `src/components/`: Contains reusable UI components.
    -   `layout/`: Components like Header and Footer.
    -   `sections/`: Components for different sections of the landing page (Hero, About, etc.).
    -   `ui/`: ShadCN UI components.
-   `src/types/`: TypeScript type definitions.
-   `public/`: Static assets.

## Customization

-   **Content**: Modify the content within each section component in `src/components/sections/`. Dummy data for services and projects can be updated directly in their respective files.
-   **Styling**: Adjust Tailwind CSS classes in components or update the theme variables in `src/app/globals.css`. The primary, background, and accent colors are defined there using HSL CSS variables.
-   **Owner Information**: Update "Alex Johnson" and related details throughout the components.
-   **Contact Email**: Change the placeholder email in `src/components/sections/ContactSection.tsx`.

This project is scaffolded and can be extended further as needed.
