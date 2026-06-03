Unicenter Communications - Landing Page
A premium, modern, and highly interactive enterprise landing page built for Unicenter Communications, a leading provider of telecom and IT infrastructure solutions.

🚀 Tech Stack & Libraries
Core Technologies
React 19: A component-based JavaScript library for building clean, reactive user interfaces.
Vite 8: An ultra-fast build tool and development server with hot module replacement (HMR).
Tailwind CSS v4: A modern utility-first CSS framework used for modular styling and premium responsive layouts.
Main Libraries
Motion (Framer Motion v12): Handles high-performance animations, scroll-triggered fade-ins (ScrollReveal), spring-physics burger animations, and the horizontal sticky scroll-gallery.
Sonner: Powers custom, stacked toast notifications for user validation feedback (warnings, errors, and successes).
✨ Key Features & UX Optimizations
1. Dynamic Hero Section
Floating Logo: Animated logo orb with radiating glowing pulse effects.
Responsive Stats Badges: Displays core company stats (Projects, Experience, Satisfaction) that cleanly wrap, scale down, and prevent clipping on small screen sizes (tested down to 343px width).
2. Sticky Horizontal Scroll Gallery (Services & Projects)
Responsive Headers: On mobile viewports, headers reside inside the sticky gallery container to prevent empty white-space. On desktop, they scroll naturally.
Tuned Layout: Custom mobile card heights (h-40) and text wrapping preserve bottom visibility and prevent vertical clipping.
3. Contact Form (Email Us)
Multi-Choice Services: Features a custom-styled dropdown with individual checkboxes and a "Select All / Deselect All" toggle.
Autofill & Keyboard Validation: Smart phone input that:
Intercepts and filters manual non-digit keystrokes.
Automatically translates Philippine country prefixes (+63 or 63 followed by 10 digits) to local format (09...).
Ignores standard formatting punctuation (spaces, dashes, plus signs, parentheses) during paste or autofill to prevent false-positive validation errors.
Session State Cache: Persists form fields (First Name, Last Name, Phone, Services) in sessionStorage so that inputs are not lost when navigating away or refreshing. A manual "Clear form" option is available.
Clean Redirection: Dynamically opens Gmail/Outlook compose targets using standard HTML anchor tags (target="_blank" rel="noopener noreferrer") to bypass Chrome's Bounce Tracking Mitigation rules.
4. Interactive Particle Background
Responsive Canvas: Floating network particles render dynamically on a <canvas> element. To keep the screen clean and readable, the node count decreases from 80 (desktop) to 20 (mobile), and connection lines dynamically shorten on mobile screens.
📁 File Structure
unicentercom/
├── public/                       # Static assets (images, logos, partner graphics)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── BackgroundCanvas.jsx  # Responsive network particle background animation
│   │   │   ├── Footer.jsx            # Detailed footer links & company contacts
│   │   │   └── Navbar.jsx            # Responsive header navigation with bouncy spring burger menu
│   │   └── ui/
│   │       ├── ScrollHorizontalGallery.jsx # Horizontal sticky gallery controller
│   │       └── ScrollReveal.jsx      # Framer motion fade-in scroll reveal wrapper
│   ├── data/
│   │   └── siteContent.jsx       # Static copy, services descriptions, features, and projects list
│   ├── motion/
│   │   ├── formHighlight.js      # CSS transitions for input error highlights
│   │   └── scrollGallery/
│   │       └── constants.js      # Breakpoints & dimensional constants for the gallery
│   ├── notifications/
│   │   ├── AppToaster.jsx        # Sonner toaster initialization
│   │   └── index.js              # Standard toast messages and utility triggers
│   ├── sections/
│   │   ├── About.jsx             # Company mission, vision, and profile
│   │   ├── Contact.jsx           # Form with multi-select dropdown and email composer links
│   │   ├── Features.jsx          # Grid highlighting key enterprise telecom features
│   │   ├── Hero.jsx              # Main intro with glowing branding and responsive stat badges
│   │   ├── Partners.jsx          # Auto-scrolling brand marquee of hardware partners
│   │   ├── Projects.jsx          # Showcase of completed installations
│   │   └── Services.jsx          # Grid list of services in horizontal gallery
│   ├── styles/                   # Custom stylesheet modules
│   ├── utils/
│   │   └── smoothScrollTo.js     # Helper function for hash-based smooth scrolling
│   ├── index.css                 # Base Tailwind directives and custom utility classes
│   └── main.jsx                  # React application entry point (scroll restoration setup)
├── package.json                  # Dependencies and build scripts
└── vite.config.js                # Vite build and plugins setup
🛠️ Project Setup
Installation
Clone the repository, navigate to the project directory, and install dependencies:

npm install
Run Locally
Launch the Vite development server locally:

npm run dev
Build Production Bundle
Compile and minify the project assets for deployment:

npm run build
