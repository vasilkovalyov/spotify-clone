import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import {
  fetchSettings,
  fetchPlayerSettings,
  getAvailableDevices,
} from './redux/slices';
import { getMe } from './redux/slices/user';

import { AuthService } from './services/auth.ts';

import './styles/main.scss';

authAfterLogin();
store.dispatch(fetchSettings());
store.dispatch(fetchPlayerSettings());
store.dispatch(getAvailableDevices());

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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
