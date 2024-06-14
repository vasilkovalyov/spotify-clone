import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, IconEnum } from '../3-ui';

import { TopResultArtistProps } from './top-result-artist.type';

import './top-result-artist.scss';

function TopResultArtist({ href, image, name, type }: TopResultArtistProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  function onTogglePlay() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="top-result-artist">
      <div className="top-result-artist__image">
        <img src={image.url} alt={name} />
      </div>
      <div className="top-result-artist__body">
        <h1 className="top-result-artist__name text-light">{name}</h1>
        <p className="top-result-artist__type">{type}</p>
        <Button
          className="top-result-artist__play-link play-link"
          onClick={onTogglePlay}
        >
          <Icon icon={isPlaying ? IconEnum.PAUSE : IconEnum.PLAY} size={24} />
        </Button>
      </div>
      <Link to={href} className="top-result-artist__link" />
    </div>
  );
}

export default TopResultArtist;
