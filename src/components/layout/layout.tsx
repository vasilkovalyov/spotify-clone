import { Outlet } from 'react-router-dom';

import './layout.scss';

function Layout() {
  return (
    <div className="app">
      <aside className="left-sidebar"></aside>
      <main className="main">
        <Outlet />
      </main>
      <aside className="right-sidebar"></aside>
      <section className="player-bar"></section>
    </div>
  );
}

export default Layout;
