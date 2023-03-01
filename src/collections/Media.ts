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
        width: 860,
        height: 645,
        crop: 'center',
        name: 'portraitMedium',
      },
    ],
  },
  fields: [],
};

export default Media;
