# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Amplified Expansion, a spiritual coaching and wellness business. The site includes:
- Landing page with hero section, about, services, and contact
- Blog section with dynamic content loading
- Events section with calendar integration
- Press section showcasing media coverage
- Multiple contact forms and sign-up functionality

## Architecture

### Frontend Stack
- **HTML/CSS/JavaScript**: Static site with vanilla JavaScript
- **Bootstrap**: CSS framework for responsive design
- **Font Awesome**: Icon library
- **Handlebars.js**: JavaScript templating for dynamic content
- **Custom CSS**: Site-specific styling in `css/styles.css`

### File Structure
- `index.html`: Main landing page
- `blog.html`, `events.html`, `press.html`, `booking.html`: Additional pages
- `js/`: JavaScript files including `scripts.js`, `blog.js`, `events.js`
- `css/styles.css`: Main stylesheet
- `images/`: Site images and graphics
- `data/`: JSON files for blog posts (`blog.json`) and events (`events.json`)
- `v0/`: Legacy version directory with older implementations

### Development Environment
The project has a backup Tailwind CSS setup in `v0/bak/` with:
- Tailwind CSS v3.4.17
- PostCSS configuration
- Relume UI components
- Tailwind Typography plugin

## Development Commands

Since this is primarily a static site, there are no build commands in the main directory. However, for the Tailwind setup in `v0/bak/`:

```bash
cd v0/bak
npm install
# Build Tailwind CSS (if needed)
npx tailwindcss -i ./static/src/tailwind.css -o ./static/dist/tailwind.css --watch
```

## Key Features

### Dynamic Content Loading
- Blog posts are loaded dynamically from `data/blog.json` using Handlebars templates
- Events are loaded from `data/events.json` with calendar integration
- JavaScript files handle the dynamic rendering in `js/blog.js` and `js/events.js`

### Navigation
- Fixed navigation bar with smooth scrolling
- Responsive mobile menu with hamburger toggle
- Scroll detection for back-to-top functionality

### Styling
- Custom CSS variables for consistent theming
- Bootstrap-based responsive grid system
- Custom fonts: Inter, Birmingham, Cormorant Garamond
- Background colors and gradients for visual appeal

## Content Management

### Blog Posts
Edit `data/blog.json` to add/modify blog posts. Each post should include:
- title, date, excerpt, content
- Image paths and alt text
- Proper JSON formatting

### Events
Edit `data/events.json` to manage events. Include:
- Event details, dates, descriptions
- Image assets in the `images/` directory
- Proper JSON structure for JavaScript parsing

## Deployment

This is a static site that can be deployed to any web server. The main files are:
- `index.html` as the entry point
- All assets in `css/`, `js/`, `images/`, and `data/` directories
- Ensure proper file permissions and paths for web server deployment

## Notes

- The site uses absolute paths for some assets - verify paths when deploying
- Social media integration is present with Open Graph meta tags
- Google Fonts and CDN resources are loaded externally
- JavaScript console logging is present for debugging scroll detection