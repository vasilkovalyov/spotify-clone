import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { convertTrackTime } from '@/utils/common';

import { Button, IconEnum } from '../3-ui';
import { TrackProps } from './track.type';

import './track.scss';

function Track({
  artistName,
  duration,
  image,
  name,
  href,
  hrefArtist,
  number,
  selected = false,
  playing = false,
  current = false,
  onClickTogglePlay,
  onClickSelected,
}: TrackProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    setIsPlaying(playing);
  }, [playing]);

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  function onHandleTogglePlay() {
    setIsPlaying(!isPlaying);
    if (!isSelected) {
      setIsSelected(true);
      onClickSelected && onClickSelected();
    }
    onClickTogglePlay && onClickTogglePlay(!isPlaying);
  }

  function onHandleSelected() {
    if (!isSelected) {
      setIsSelected && setIsSelected(!isSelected);
      onClickSelected && onClickSelected();
    }
  }

  return (
    <div
      className={cn('track', {
        'track--playing': isPlaying,
        'track--selected': isSelected,
        'track--current': current,
        'track--number': number,
        'track--without-image': !image,
      })}
      onClick={onHandleSelected}
    >
      {number && (
        <div className="track__number-container">
          <div className="track__number">{number}</div>
          <Button
            className="track__play-button track__play-button--addition"
            icon={isPlaying ? IconEnum.PAUSE : IconEnum.PLAY}
            onClick={onHandleTogglePlay}
          ></Button>
          {number && (
            <img
              src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif"
              className="track__playing-animation"
              alt=""
              width={14}
              height={14}
            />
          )}
        </div>
      )}
      {image && (
        <div className="track__image">
          <img src={image.url} alt={name} />

          {!number && (
            <Button
              className="track__play-button"
              icon={isPlaying ? IconEnum.PAUSE : IconEnum.PLAY}
              onClick={onHandleTogglePlay}
            ></Button>
          )}
        </div>
      )}
      <div className="track__body">
        <h5 className="track__name clamp-one-line">
          <Link to={href}>{name}</Link>
        </h5>
        {hrefArtist && artistName && (
          <p className="track__artist">
            <Link to={hrefArtist}>{artistName}</Link>
          </p>
        )}
      </div>
      <div className="track__tools">
        {/* <Button className="track__add">
          <Icon icon={IconEnum.ADD_CIRCLE} />
        </Button> */}
        <p className="track__duration">{convertTrackTime(duration)}</p>
        {/* <Button className="track__more">
          <Icon icon={IconEnum.MORE} />
        </Button> */}
      </div>
    </div>
  );
}

export default Track;
