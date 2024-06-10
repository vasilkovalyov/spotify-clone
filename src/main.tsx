import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { fetchSettings } from './redux/slices/settings.ts';

import './styles/main.scss';

store.dispatch(fetchSettings());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
