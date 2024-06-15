import {
  BlockHead,
  ListSkeletons,
  MediaCard,
  MediaCardSkeleton,
} from '@/components';

import { BlockMediaCardsProps } from './block-media-cards.type';

function BlockMediaCards({
  title,
  items,
  statusLoading,
  link,
}: BlockMediaCardsProps) {
  return (
    <section className="block-relate-artists">
      <div className="block-relate-artists__container">
        <BlockHead isTitleLarge={false} title={title} link={link} />
        {statusLoading === 'loading' && (
          <ListSkeletons count={6} className="media-card-grid">
            <MediaCardSkeleton />
          </ListSkeletons>
        )}
        {statusLoading === 'succeeded' && (
          <div className="media-card-grid">
            {items.length &&
              items.map(({ id, name, type, image, href }) => (
                <MediaCard
                  key={id}
                  id={id}
                  image={image}
                  name={name}
                  type={type}
                  href={href}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default BlockMediaCards;
