import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  updateVolumeDevice,
  updateHelperPanel,
  toggleShuffle,
  toggleRepeat,
} from '@/redux/slices';
import { HelperPanelType } from '@/types/store';

import { Button, IconEnum, ProgressSlider } from '@/components/3-ui';
import { Volume } from '@/components/volume';
import { Pages } from '@/constants/pages';

import './player-bar.scss';

function PlayerBar() {
  const dispatch = useAppDispatch();
  const playerSlice = useAppSelector((state) => state.playerSlice);
  const settingsSlice = useAppSelector((state) => state.settingsSlice);

  function onHandleUpdateVolume(value: number) {
    dispatch(updateVolumeDevice(value));
  }

  function onHandleToggleHelper(type: HelperPanelType) {
    dispatch(updateHelperPanel(type));
  }

  function onHandleRepeat() {
    dispatch(toggleRepeat());
  }
  function onHandleShuffle() {
    dispatch(toggleShuffle());
  }

  return (
    <div className="player-bar">
      <div className="player-bar__track">
        <div className="player-track">
          <div className="player-track__image">
            <img src="" alt="" />
          </div>
          <div className="player-track__body">
            <Link
              to={`${Pages.ALBUM}/#`}
              className="player-track__name text-light clamp-one-line"
            ></Link>
            <Link
              to={`${Pages.ARTIST}/#`}
              className="player-track__artist clamp-one-line"
            ></Link>
          </div>
        </div>
      </div>
      <div className="player-bar__middle">
        <div className="track-controls">
          <div className="track-controls__left">
            <Button
              className={cn({
                'btn--active': playerSlice.shuffle,
              })}
              onClick={onHandleShuffle}
              icon={IconEnum.SHUFFLE}
            ></Button>
            <Button icon={IconEnum.PREV}></Button>
          </div>
          <Button icon={IconEnum.PLAY}></Button>
          <div className="track-controls__right">
            <Button icon={IconEnum.NEXT}></Button>
            <Button
              className={cn({
                'btn--active': playerSlice.repeat,
              })}
              onClick={onHandleRepeat}
              icon={IconEnum.REPEAT}
            ></Button>
          </div>
        </div>
        <div className="track-progress">
          <div className="track-progress__time">00:00</div>
          <ProgressSlider className="track-progress__progress" />
          <div className="track-progress__time">00:00</div>
        </div>
      </div>
      <div className="player-bar__tools">
        <Button
          className={cn({
            'btn--active': settingsSlice.helperPanel === 'playing-view',
          })}
          icon={IconEnum.PLAYING_VIEW}
          onClick={() => onHandleToggleHelper('playing-view')}
        ></Button>
        <Button
          className={cn({
            'btn--active': settingsSlice.helperPanel === 'queue',
          })}
          icon={IconEnum.QUEUE}
          onClick={() => onHandleToggleHelper('queue')}
        ></Button>
        <Volume
          className="volume-progress"
          value={playerSlice.device?.volume_percent || 100}
          onChange={onHandleUpdateVolume}
        />
        <Button icon={IconEnum.MINIWINDOW}></Button>
        <Button icon={IconEnum.EXPAND}></Button>
      </div>
    </div>
  );
}

export default PlayerBar;
