import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleExpandedLeftSidebar } from '@/redux/slices';

import { Button, Icon, IconEnum } from '@/components/ui';

import './sidebar-tools.scss';

function SidebarTools() {
  const dispatch = useAppDispatch();
  const settingsSlice = useAppSelector((state) => state.settingsSlice);

  return (
    <div className="sidebar-tools">
      <Button
        icon={
          settingsSlice.isExpandedLeftSidebar
            ? IconEnum.LIB_COLLAPSE
            : IconEnum.LIB_EXPAND
        }
        iconSize={24}
        onClick={() => {
          dispatch(
            toggleExpandedLeftSidebar(!settingsSlice.isExpandedLeftSidebar)
          );
        }}
      >
        {!settingsSlice.isExpandedLeftSidebar && <>Your Library</>}
      </Button>
      <Button>
        <Icon icon={IconEnum.ADD} />
      </Button>
    </div>
  );
}

export default SidebarTools;
