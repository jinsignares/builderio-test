# Website 2.0 (Migration Demo)

This is a demo setup for migrating the website to a modern stack using **Next.js** and **Builder.io**.

## Features
- **Next.js App Router**: Modern React framework.
- **Builder.io Integration**: Drag-and-drop page editing for the marketing team.
- **Custom Components**: Example `Hero` component integrated with Builder.io.
- **Linting & Formatting**: ESLint (Airbnb rules) and Prettier.

## Getting Started

### 1. Configure Environment
A `.env.local` file has been created with a placeholder Builder.io API Key.
**You must replace this with your actual Public API Key from Builder.io.**

1. Go to [Builder.io](https://builder.io) and sign in/up.
2. Go to **Account Settings** -> **Public API Key**.
3. Update `.env.local`:
   ```bash
   NEXT_PUBLIC_BUILDER_API_KEY=your_actual_public_key
   ```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Creating Pages in Builder.io

1. Create a new **Page** model in Builder.io named `page`.
2. Create a new content entry of type `page`.
3. Set the URL to `/` (for homepage) or any other path (e.g., `/about`).
4. You should see your live site in the Builder.io Visual Editor.
5. You can drag and drop the **Hero** component (under Custom Components) onto the page.

## Project Structure

- `app/[[...slug]]/page.tsx`: The catch-all route that fetches and renders Builder.io pages.
- `builder-registry.ts`: Registers custom React components for use in the Visual Editor.
- `components/`: Source code for custom components (e.g., `Hero.tsx`).
- `eslint.config.mjs`: ESLint configuration with Airbnb rules.
