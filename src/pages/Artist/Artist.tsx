import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BlockRelateArtists } from '@/blocks';
import { SpotifyService } from '@/services';
import { StatusLoadingBuilder } from '@/types/common';
import { BlockBannerArtist } from '@/blocks/block-banner-artist';

function PageArtist() {
  const { id } = useParams();

  return (
    <div className="page-artist">
      <BlockBannerArtist artistId={id as string} />
      <BlockRelateArtists artistId={id as string} />
    </div>
  );
}

export default PageArtist;
