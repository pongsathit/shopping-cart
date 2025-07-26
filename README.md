# 🛒 Shopping Cart Frontend

A modern, responsive shopping cart application built with React.js and Vite. This project demonstrates a full-featured e-commerce frontend with beautiful UI/UX design.

## ✨ Features

- **Modern UI Design**: Glassmorphism design with gradient backgrounds and smooth animations
- **Product Catalog**: Display products in a responsive grid layout
- **Shopping Cart**: Add, remove, and update product quantities
- **Real-time Updates**: Cart updates instantly when products are added/removed
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth transitions, and intuitive controls

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons
- **CSS3** - Modern styling with gradients and animations
- **ESLint** - Code linting and formatting

## 📱 Features Overview

### Product Management
- Display products with images, titles, prices, and descriptions
- Add products to cart with a single click
- Automatic quantity management for duplicate items

### Shopping Cart
- View all items in cart with images and details
- Increase/decrease quantity with +/- buttons
- Remove items completely with trash icon
- Real-time total price calculation
- Empty cart state handling

### User Experience
- Smooth hover animations on product cards
- Responsive design for all screen sizes
- Intuitive quantity controls
- Visual feedback for all interactions

## 🎨 Design Features

- **Glassmorphism Effect**: Semi-transparent cards with backdrop blur
- **Gradient Backgrounds**: Beautiful purple-blue gradient theme
- **Smooth Animations**: Hover effects and transitions
- **Modern Typography**: Clean, readable fonts
- **Color Scheme**: Purple, teal, and coral accent colors

## 📁 Project Structure

```
shopping-cart/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Component-specific styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

## 🔧 Customization

### Adding New Products
Edit the `products` array in `src/App.jsx`:

```javascript
const products = [
  {
    id: 7,
    name: "New Product",
    price: 199.99,
    description: "Product description",
    image: "https://example.com/image.jpg"
  }
  // ... more products
]
```

### Styling Changes
- Global styles: `src/index.css`
- Component styles: `src/App.css`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel/Netlify
The project is ready for deployment on platforms like Vercel or Netlify. Simply connect your repository and the build process will be handled automatically.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React and Vite**
