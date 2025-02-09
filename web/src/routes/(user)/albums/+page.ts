import { authenticate } from '$lib/utils/auth';
import { getFormatter } from '$lib/utils/i18n';
import { getAllAlbums } from '@immich/sdk';
import type { PageLoad } from './$types';

export const load = (async () => {
  await authenticate();
  const sharedAlbums = await getAllAlbums({ shared: true });
  const publishedAlbums = await getAllAlbums({published: true})
  const albums = await getAllAlbums({});
  const $t = await getFormatter();

  return {
    albums,
    sharedAlbums,
    publishedAlbums,
    meta: {
      title: $t('albums'),
    },
  };
}) satisfies PageLoad;
