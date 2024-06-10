import { Outlet } from 'react-router-dom';
import cn from 'classnames';

import { useAppSelector } from '@/redux/hooks';
import { LeftSidebar } from '../containers';

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
        <Outlet />
      </main>
      <aside className="right-sidebar"></aside>
      <section className="player-bar"></section>
    </div>
  );
}

export default Layout;
