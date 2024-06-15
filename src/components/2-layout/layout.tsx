import { Outlet } from 'react-router-dom';
import cn from 'classnames';

import { useAppSelector } from '@/redux/hooks';
import { Header, LeftSidebar, PlayerBar } from '../1-containers';

import './layout.scss';

function Layout() {
  const settingsSlice = useAppSelector((state) => state.settingsSlice);

  return (
    <div
      className={cn('app', {
        'app--left-sidebar-show': settingsSlice.isExpandedLeftSidebar,
      })}
    >
      <LeftSidebar />
      <main className="main">
        <div className="panel">
          <Header />
          <Outlet />
        </div>
      </main>
      <aside className="right-sidebar"></aside>
      <PlayerBar />
    </div>
  );
}

export default Layout;
