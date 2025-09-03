# VerveDent - Modern Dental Clinic Website Template

VerveDent is a clean, responsive dental clinic website template built with Tailwind CSS and minimal JavaScript.  
It’s designed for fast performance, easy customization, and a modern look.

---

## Features

- Responsive design for mobile, tablet, and desktop
- Modern UI with Tailwind CSS
- Smooth dropdown navigation
- Service, pricing, and contact sections
- Easy to customize

---

## Project Structure

```
vervedent/
├── public/
│   ├── index.html
│   ├── output.css
│   └── script.js
├── src/
│   └── input.css
├── package.json
├── tailwind.config.js
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v7 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/vervedent.git
   cd vervedent
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build Tailwind CSS:**
   ```bash
   npm run start
   ```
   This will watch `src/input.css` and output to `public/output.css`.

4. **Serve the project:**
   - Open `public/index.html` in your browser, or
   - Use a local server (e.g., Live Server extension in VS Code).

---

## Deployment

To deploy on Vercel or Netlify:
- Set the output/public directory to `public`.
- Ensure `index.html`, `output.css`, and `script.js` are in the `public` folder.

---

## Contribution

1. Fork the repository.
2. Create a feature branch.
3. Make your changes and commit them.
4. Test thoroughly.
5. Submit a Pull Request.
