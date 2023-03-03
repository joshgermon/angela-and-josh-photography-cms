import path from 'path';
import type { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../media'),
    // Specify the size name that you'd like to use as admin thumbnail
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        height: 450,
        width: 450,
        crop: 'center',
        name: 'thumbnail',
      },
      {
        width: 885,
        height: 650,
        crop: 'center',
        name: 'portraitMedium',
      },
      {
        width: 1640,
        height: 720,
        crop: 'center',
        name: 'featureBanner',
      },
      {
        width: 2160,
        height: 640,
        crop: 'center',
        name: 'pageBanner',
      },
      {
        width: 2160,
        height: 1440,
        crop: 'center',
        name: 'hero',
      },
      {
        width: 3840,
        height: 2160,
        crop: 'center',
        name: 'hero4k',
      },
    ],
  },
  fields: [],
  access: {
    read: () => true,
  }
};

export default Media;
