import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Button, Icon, IconEnum } from '../3-ui';

import { MediaCardProps } from './media-card.type';

import './media-card.scss';

function MediaCard({ href, image, name, type }: MediaCardProps) {
  return (
    <div className={cn('media-card', `media-card--${type}`)}>
      <div className="media-card__media">
        <div className="media-card__image">
          <img
            src={image.url}
            alt={name}
            width={image.width}
            height={image.height}
          />
        </div>
        <Button className="media-card__play-link play-link">
          <Icon icon={IconEnum.PLAY} size={24} />
        </Button>
      </div>
      <div className="media-card__body">
        <h5 className="media-card__name clamp-one-line">{name}</h5>
        <p className="media-card__type">{type}</p>
      </div>

      {href && <Link to={href} className="media-card__link" />}
    </div>
  );
}

export default MediaCard;
