import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('=== MAIN.TSX LOADED ===');
console.log('Root element:', document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root')!);
console.log('React root created');

root.render(
  <App />
);
console.log('App component rendered');
