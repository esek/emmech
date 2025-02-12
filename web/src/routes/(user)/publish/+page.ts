import { getFormatter } from '$lib/utils/i18n';
import { getPublishedAlbums, getAllAlbums, type AlbumResponseDto } from '@immich/sdk';
import type { PageLoad } from './$types';
import { authenticate } from '$lib/utils/auth';

export const load = (async () => {
  await authenticate({published: true})
  const publishedAlbums: AlbumResponseDto[] = await getPublishedAlbums()
  
  const $t = await getFormatter();

  return {
    publishedAlbums,
    meta: {
      title: $t('albums'),
    },
  };
}) satisfies PageLoad;
