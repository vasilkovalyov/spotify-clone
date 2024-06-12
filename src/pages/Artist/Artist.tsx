import { BlockRelateArtists } from '@/blocks';
import { useParams } from 'react-router-dom';

function PageArtist() {
  const { id } = useParams();

  return (
    <div className="page-artist">
      <BlockRelateArtists artistId={id as string} />
    </div>
  );
}

export default PageArtist;
