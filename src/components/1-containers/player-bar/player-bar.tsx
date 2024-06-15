import { Link } from 'react-router-dom';

import { Volume } from '@/components/volume';
import { Button, IconEnum, ProgressSlider } from '@/components/3-ui';
import { Pages } from '@/constants/pages';

import './player-bar.scss';

function PlayerBar() {
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
            <Button icon={IconEnum.SHUFFLE}></Button>
            <Button icon={IconEnum.PREV}></Button>
          </div>
          <Button icon={IconEnum.PLAY}></Button>
          <div className="track-controls__right">
            <Button icon={IconEnum.NEXT}></Button>
            <Button icon={IconEnum.REPEAT}></Button>
          </div>
        </div>
        <div className="track-progress">
          <div className="track-progress__time">00:00</div>
          <ProgressSlider className="track-progress__progress" />
          <div className="track-progress__time">00:00</div>
        </div>
      </div>
      <div className="player-bar__tools">
        <Button icon={IconEnum.PLAYING_VIEW}></Button>
        <Button icon={IconEnum.QUEUE}></Button>
        <Volume className="volume-progress" value={100} />
        <Button icon={IconEnum.MINIWINDOW}></Button>
        <Button icon={IconEnum.EXPAND}></Button>
      </div>
    </div>
  );
}

export default PlayerBar;
