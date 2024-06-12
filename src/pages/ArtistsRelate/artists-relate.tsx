import { useParams } from 'react-router-dom';
import { BlockRelateArtists } from '@/blocks';

import './artists-relate.scss';

function PageArtistsRelate() {
  const { id } = useParams();

  return (
    <div className="page-artists-relate">
      <BlockRelateArtists artistId={id as string} isLimited={true} />
    </div>
  );
}

export default PageArtistsRelate;
