import { BlockRecentlyPlayed } from '@/blocks';

import './recently-played.scss';

function PageRecentlyPlayed() {
  return (
    <div className="page-artists-relate">
      <BlockRecentlyPlayed isLimited={true} />
    </div>
  );
}

export default PageRecentlyPlayed;
