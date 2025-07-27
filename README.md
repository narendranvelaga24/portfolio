# My Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, custom cursor effects, and a clean design showcasing my work and experience.

## ✨ Features

- **Modern Design**: Clean, minimalist interface with smooth animations
- **Custom Cursor**: Interactive cursor that responds to hover states
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Scrolling**: Seamless navigation between sections
- **Dark Theme**: Elegant dark color scheme
- **Performance Optimized**: Built with Vite for fast development and builds

## 🚀 Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Package Manager**: npm
- **Icons**: Custom SVG icons
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections (Hero, About, etc.)
│   ├── CustomCursor.jsx   # Custom cursor component
│   ├── Navbar.jsx         # Navigation component
│   └── Footer.jsx         # Footer component
├── data/
│   └── index.js          # Portfolio data and content
├── assets/               # Static assets
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎨 Customization

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Add the section data to `src/data/index.js`
3. Import and add the component to `src/App.jsx`

### Styling
- Uses Tailwind CSS for styling
- Custom animations with Framer Motion
- Responsive design with mobile-first approach

### Content
- Update portfolio content in `src/data/index.js`
- Modify component content directly in respective files
- Add new assets to `src/assets/`
- Add resume PDF to `public/resume.pdf`
- Update project images in `src/assets/`

## 🌟 Key Features

### Custom Cursor
- Follows mouse movement with smooth animations
- Expands on hoverable elements
- Scales during scrolling
- Responsive to different screen sizes

### Navigation
- Sticky navigation with active section highlighting
- Smooth scrolling to sections
- Mobile-responsive hamburger menu
- Real-time clock display

### Sections
- **Hero**: Introduction, call-to-action, and resume download
- **About**: Personal information and skills
- **Experience**: Work history and achievements
- **Works**: Portfolio projects showcase
- **Contact**: Contact information, resume link, and social links

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions or feedback, feel free to reach out through the contact section of the portfolio or directly via email.

---

Built with ❤️ using React, Vite, and Tailwind CSS
