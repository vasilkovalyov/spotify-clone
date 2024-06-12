import './track.scss';

function TrackSkeleton() {
  return (
    <div className="track track--skeleton pulse-animation">
      <div className="track__image pulse-animation"></div>
      <div className="track__body">
        <h5 className="track__name pulse-animation"></h5>
        <p className="track__artist pulse-animation"></p>
      </div>
      <div className="track__tools">
        <p className="track__duration pulse-animation"></p>
      </div>
    </div>
  );
}

export default TrackSkeleton;
