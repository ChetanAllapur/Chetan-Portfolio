# Chetan Portfolio

Personal portfolio website for Chetan Allapur, built with React and Vite. The site showcases experience, featured projects, contact links, and a form powered by EmailJS.

Live site: [https://chetanallapur.web.app/](https://chetanallapur.web.app/)

## Tech Stack

- React 19
- Vite
- Framer Motion
- EmailJS
- Firebase Hosting
- Firebase Firestore and Cloud Functions

## Features

- Responsive single-page portfolio layout
- Sticky navigation with smooth section scrolling
- Animated hero, about, projects, and contact sections
- Resume download link
- Contact form with validation and honeypot protection
- EmailJS-powered message delivery
- Firebase hosting configuration for deployment

## Project Structure

```text
src/
  assets/
  components/
    Navbar/
    Footer/
  data/
  lib/
  pages/
    home/
    about/
    projects/
    contact/
  App.jsx
  main.jsx
  global.css
  App.css
  styles/
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Environment Variables

Create a `.env.local` file in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If these values are missing, the contact form will show a configuration error instead of sending mail.

## Firebase

This repository includes Firebase hosting and Firestore configuration:

- `firebase.json` for Hosting
- `firestore.rules` for contact message storage rules
- `functions/` for the contact message API

To deploy the site after building:

```bash
firebase deploy --only hosting
```

If you also want to deploy Firestore rules or functions, use:

```bash
firebase deploy
```

## Notes

- Project links in the portfolio can be updated directly in `src/pages/projects/Projects.jsx`.
- Social and resume links are centralized in `src/data/profileLinks.js`.
- The contact form email copy and validation live in `src/pages/contact/Contact.jsx`.
