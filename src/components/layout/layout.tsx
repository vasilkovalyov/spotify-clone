import { Outlet } from 'react-router-dom';
import { Navigation } from '../containers';

import './layout.scss';

function Layout() {
  return (
    <div className="app">
      <aside className="left-sidebar">
        <div className="panel">
          <Navigation />
        </div>
      </aside>
      <main className="main">
        <Outlet />
      </main>
      <aside className="right-sidebar"></aside>
      <section className="player-bar"></section>
    </div>
  );
}

export default Layout;
