# Accredian Enterprise Website

A high-performance, responsive corporate website built for Accredian Enterprise using Next.js and Tailwind CSS.

🌐 **Live Demo:** [https://accredian-ruby.vercel.app](https://accredian-ruby.vercel.app)
🐙 **GitHub:** [https://github.com/Abhoy48/accredian](https://github.com/Abhoy48/accredian)

## 🚀 Setup Instructions

Follow these steps to get the project running locally:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd accredian-enterprise
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View the site:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✨ Key Features

*   **Dynamic Testimonials API:** Testimonials are not hardcoded; they are fetched from a custom Next.js API endpoint (`/api/testimonials`), demonstrating full-stack data handling.
*   **Functional Lead Capture:** The "Enquire Now" form is fully interactive. It captures user data, sends it to a backend API (`/api/enquire`), and provides real-time feedback (loading states and success messages).
*   **Smooth Programmatic Navigation:** Custom scroll logic ensures a perfect user experience with proper offsets for the sticky navigation bar.
*   **Mobile-First Design:** Completely responsive layout that re-adjusts components like the CAT Framework and Hero section for optimal viewing on any device.

---

## 🛠️ Approach Taken

*   **Modular Component Architecture:** The site is built with a focus on reusability. Each section (Hero, Navbar, Partnerships, etc.) is a standalone React component, making the codebase easy to maintain and scale.
*   **Sticky Navigation & Smooth Scrolling:** I implemented a custom JavaScript scroll handler that calculates precise offsets. This ensures that when you click a nav item, the section doesn't get hidden behind the sticky header.
*   **Global Modal System:** To keep the "Enquire Now" functionality simple and consistent, I used a global click listener. Any button across the site with the `enquire-button` class will automatically trigger the popup without needing to pass state through every component.
*   **Modern Aesthetics:** Focused on a clean, professional "Enterprise" look using a blue-accented color palette, consistent typography, and subtle micro-interactions.

---

## 🤖 AI Usage Explanation

This project was a collaborative effort where I planned the entire architecture and logic from the start. I wrote the foundational code myself, and then utilized **Antigravity (AI)** to help refine the components, assist with complex styling (like the wave pattern in the CAT Framework), automate repetitive tasks like linking sections, and optimize the overall mobile responsiveness.

---

## 📈 Future Improvements (With More Time)

If I had more time to work on this, I would focus on:
1.  **Framer Motion Animations:** Adding entrance animations (fade-ins, slide-ups) to sections as the user scrolls down the page to make it feel more dynamic.
2.  **Form Validation & Backend:** Implementing robust client-side validation for the inquiry form and connecting it to a real email service or CRM.
3.  **Dynamic Content:** Moving the hardcoded data (like testimonials and partner logos) into a Headless CMS (like Sanity or Contentful) for easier updates.
4.  **Performance:** Optimizing image assets and implementing lazy loading for sections further down the page to improve initial load times.
5.  **Dark Mode:** Adding a toggle for a native dark mode theme.
