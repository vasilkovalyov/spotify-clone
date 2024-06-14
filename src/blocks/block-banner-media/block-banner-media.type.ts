import { ImageType } from '@/types/image';

export type BlockBannerMediaProps = {
  type: string;
  name: string;
  image: ImageType;
  descriptionList: BlockBannerMediaDescriptionProps[];
};

export type BlockBannerMediaDescriptionProps = {
  image?: ImageType;
  path?: string;
  name: string;
};
