import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; 
import store from './app/store';
import { Provider } from 'react-redux';


const rootElement = document.getElementById('root');


if (rootElement) {
  const root = createRoot(rootElement);

  // Рендерим приложение
  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  );
} else {
  console.error('Root element not found');
}