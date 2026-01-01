# LLM Chatbot UI

A modern, feature-rich chat interface built with React and Vite, featuring a sleek dark theme with gradient accents and intuitive user interactions.

## ✨ Features

- **DeepThink Design Aesthetic**: Vibrant orange-blue gradient borders with corner glow effects
- **Collapsible Sidebar**: Smart sidebar with icon-only mode, hover interactions, and smooth transitions
- **Interactive Input Area**: Multi-mode chat input (Normal, DeepThink) with dropdown menus
- **Dark Theme**: Carefully crafted dark color palette with neon accents
- **Responsive Design**: Optimized for various screen sizes
- **Modular Architecture**: Clean component structure for maintainability

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx          # Collapsible sidebar with navigation
│   │   └── MainContent.jsx      # Main chat area container
│   └── ui/
│       ├── InputArea.jsx        # Chat input with mode selection
│       ├── NavItem.jsx          # Reusable navigation item
│       ├── ChatHistoryItem.jsx  # Chat history entry component
│       └── SuggestionPill.jsx   # Suggestion button component
├── App.jsx                       # Main application component
└── index.css                     # Global styles and Tailwind config
```

## 🎨 Key Components

### Sidebar
- **Collapsible Design**: Click to expand/retract
- **Hover Interactions**: Toggle button appears on hover when collapsed
- **Navigation**: Quick access to chats, projects, and settings
- **Chat History**: Organized by date with search functionality

### Input Area
- **Mode Selection**: Switch between Normal and DeepThink modes
- **Dropdown Menu**: Quick answer, Balanced, DeepThink, Research options
- **Gradient Border**: Distinctive orange-blue visual accent
- **Voice Input**: Integrated voice input option

## 🛠️ Built With

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎯 Design Highlights

- **Gradient Accents**: Custom orange-to-blue gradients for visual depth
- **Corner Glows**: Subtle blur effects for modern aesthetics
- **Smooth Transitions**: 300ms ease-in-out animations throughout
- **Dark Mode Optimized**: `#050505` base with carefully chosen accent colors

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Shreyas Urade**

---

Built with ❤️ using React and Vite
