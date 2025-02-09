import { getFormatter } from '$lib/utils/i18n';
import { getAllAlbums, getAllSharedLinksUnchecked, type AlbumResponseDto } from '@immich/sdk';
import type { PageLoad } from './$types';
import { authenticate } from '$lib/utils/auth';

export const load = (async () => {
  await authenticate();
  const publishedAlbums: AlbumResponseDto[] = await getAllAlbums({published: true})

  const $t = await getFormatter();

  return {
    publishedAlbums,
    meta: {
      title: $t('albums'),
    },
  };
}) satisfies PageLoad;
