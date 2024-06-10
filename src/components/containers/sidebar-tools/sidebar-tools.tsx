import { useState } from 'react';
import { Button, Icon, IconEnum } from '@/components/ui';

import './sidebar-tools.scss';

function SidebarTools() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <div className="sidebar-tools">
      <Button
        icon={isCollapsed ? IconEnum.LIB_COLLAPSE : IconEnum.LIB_EXPAND}
        iconSize={24}
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
      >
        Your Library
      </Button>
      <Button>
        <Icon icon={IconEnum.ADD} />
      </Button>
    </div>
  );
}

export default SidebarTools;
