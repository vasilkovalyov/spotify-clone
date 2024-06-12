import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { convertTrackTime } from '@/utils/common';

import { Button, Icon, IconEnum } from '../3-ui';
import { TrackProps } from './track.type';

import './track.scss';

function Track({
  artistName,
  duration,
  image,
  name,
  href,
  hrefArtist,
  selected = false,
  playing = false,
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
      })}
      onClick={onHandleSelected}
    >
      <div className="track__image">
        <img src={image.url} alt={name} />
        <Button className="track__play-button" onClick={onHandleTogglePlay}>
          <Icon icon={isPlaying ? IconEnum.PAUSE : IconEnum.PLAY} />
        </Button>
      </div>
      <div className="track__body">
        <h5 className="track__name clamp-one-line">
          <Link to={href}>{name}</Link>
        </h5>
        <p className="track__artist">
          <Link to={hrefArtist}>{artistName}</Link>
        </p>
      </div>
      <div className="track__tools">
        <Button className="track__add">
          <Icon icon={IconEnum.ADD_CIRCLE} />
        </Button>
        <p className="track__duration">{convertTrackTime(duration)}</p>
        <Button className="track__more">
          <Icon icon={IconEnum.MORE} />
        </Button>
      </div>
    </div>
  );
}

export default Track;
