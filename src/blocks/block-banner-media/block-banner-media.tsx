import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Button, Icon, IconEnum } from '@/components/3-ui';

import { BlockBannerMediaProps } from './block-banner-media.type';

import './block-banner-media.scss';

function BlockBannerArtist({
  image,
  name,
  type,
  descriptionList,
}: BlockBannerMediaProps) {
  return (
    <section className="block-banner-track">
      <div className="block-banner-track__container">
        <div className="block-banner-track__image">
          <img src={image.url} alt={name} />
          <Button className="block-banner-track__play-link play-link">
            <Icon icon={IconEnum.PLAY} size={24} />
          </Button>
        </div>
        <div className="block-banner-track__body">
          <p className="block-banner-track__type text-light">{type}</p>
          <h1 className="block-banner-track__name text-light">{name}</h1>
          <ul className="block-banner-track__description text-light">
            {descriptionList.map((item, index) => (
              <li key={`${item.name}-${index}`}>
                {item.image && <img src={item.image.url} alt={name} />}
                {item.path ? (
                  <Link
                    to={item.path}
                    className={cn({
                      'text-700': item.image && item.path,
                    })}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>{item.name}</>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BlockBannerArtist;
