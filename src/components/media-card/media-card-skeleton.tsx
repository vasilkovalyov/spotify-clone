import './media-card.scss';

function MediaCardSkeleton() {
  return (
    <div className="media-card media-card--skeleton">
      <div className="media-card__media">
        <div className="media-card__image pulse-animation"></div>
      </div>
      <div className="media-card__body">
        <h5 className="media-card__name pulse-animation"></h5>
        <p className="media-card__type pulse-animation"></p>
      </div>
    </div>
  );
}

export default MediaCardSkeleton;
