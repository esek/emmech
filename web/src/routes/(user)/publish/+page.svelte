<script lang="ts">
  import type { PageData } from './$types';
  import { albumViewSettings } from '$lib/stores/preferences.store';
  import { createAlbumAndRedirect } from '$lib/utils/album-utils';
  import EmptyPlaceholder from '$lib/components/shared-components/empty-placeholder.svelte';
  import { t } from 'svelte-i18n';
  import AlbumsListPublish from '$lib/components/album-page/albums-list-publish.svelte';
  import { loadUser } from '$lib/utils/auth';

  export let data: PageData;

  let searchQuery = '';
  let albumGroups: string[] = [];
</script>

<AlbumsListPublish
  publishedAlbums={data.publishedAlbums}
  userSettings={$albumViewSettings}
  {searchQuery}
  bind:albumGroupIds={albumGroups}
>
  <EmptyPlaceholder slot="empty" text={$t('no_albums_message')} onClick={() => createAlbumAndRedirect()} />
</AlbumsListPublish>
