# Todo App with Redux Toolkit

This is a simple Todo application built with React and Redux Toolkit.  
It allows users to add and remove todos, demonstrating state management using Redux Toolkit.

## Features

- Add new todos
- Remove existing todos
- State management with Redux Toolkit
- Styled with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/vijaychandra1910/Todo-app-reduxtoolkit.git
   cd Todo-app-reduxtoolkit
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

## Project Structure

```
src/
  app/
    store.js           # Redux store setup
  components/
    AddTodo.jsx        # Component to add todos
    Todos.jsx          # Component to display and remove todos
  features/
    todo/
      todoSlice.js     # Redux slice for todos
  App.jsx              # Main app component
  main.jsx             # Entry point
```

## Technologies Used

- React
- Redux Toolkit
- Tailwind CSS
- Vite

## License

This project is open source and available under the [MIT License](LICENSE).
