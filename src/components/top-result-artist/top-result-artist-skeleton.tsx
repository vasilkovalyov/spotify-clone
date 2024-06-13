import './top-result-artist.scss';

function TopResultArtistSkeleton() {
  return (
    <div className="top-result-artist top-result-artist--skeleton pulse-animation">
      <div className="top-result-artist__image pulse-animation"></div>
      <div className="top-result-artist__body">
        <h1 className="top-result-artist__name pulse-animation"></h1>
        <p className="top-result-artist__type pulse-animation"></p>
      </div>
    </div>
  );
}

export default TopResultArtistSkeleton;
