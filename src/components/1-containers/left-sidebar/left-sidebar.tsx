import { Navigation } from '../navigation';
import { SidebarTools } from '../sidebar-tools';

import './left-sidebar.scss';

function LeftSidebar() {
  return (
    <aside className="left-sidebar">
      <div className="panel">
        <Navigation />
      </div>
      <div className="panel panel--second">
        <SidebarTools />
      </div>
    </aside>
  );
}

export default LeftSidebar;
