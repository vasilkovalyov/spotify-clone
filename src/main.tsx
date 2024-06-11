import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { fetchSettings } from './redux/slices/settings.ts';
import { getMe } from './redux/slices/user';

import { AuthService } from './services/auth.ts';

import './styles/main.scss';

store.dispatch(fetchSettings());

async function authAfterLogin() {
  const token = AuthService.getCodeAuthFromUrl();

  if (!token) {
    store.dispatch(getMe({}));
    return;
  }

  const response = await AuthService.authentication(token);

  store.dispatch(
    getMe({
      accessToken: response.data.access_token,
    })
  );
}

authAfterLogin();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
