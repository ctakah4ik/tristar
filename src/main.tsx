import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import App from './client';
import './index.css';

const container = document.getElementById("root")

if (container) {
    const root = createRoot(container)

    root.render(
        <StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </StrictMode>,
    )
}
