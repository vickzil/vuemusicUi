<template>
  <div class="playlist">
    <div class="playlist_container">
      <div class="playlist_content">
        <MusicPlaylistHeader />

        <PlaylistMusicFiles v-if="!showFavourities" :class="(showPlaylist) ? 'bounceInUp' : ''" />
        <FavouriteMusicFiles v-if="showFavourities" :class="(showFavourities) ? 'bounceInUp' : ''" />
        <PlaylistViewMore />
      </div>
    </div>
  </div>
</template>

<script>
import PlaylistMusicFiles from "./PlaylistMusicFiles";
import FavouriteMusicFiles from "./FavouriteMusicFiles";
import PlaylistViewMore from "./PlaylistViewMore";
import MusicPlaylistHeader from "./MusicPlaylistHeader";
export default {
  name: "PlaylistContainer",
  components: {
    PlaylistMusicFiles,
    FavouriteMusicFiles,
    PlaylistViewMore,
    MusicPlaylistHeader
  },
  computed: {
    showFavourities() {
      return this.$store.getters.showFavourities;
    },
    showPlaylist() {
      return this.$store.getters.showPlaylist;
    }
  }
};
</script>

<style>
</style>