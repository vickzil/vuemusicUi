<template>
  <div class="animated">
    <div class="playlist_music_files" v-if="songs.length">
      <MusicCards v-for="song in songs" :key="song.id" :song="song" />
    </div>
    <NoResult v-else />
  </div>
</template>

<script>
import MusicCards from "./MusicCards";
import NoResult from "./NoResult";
export default {
  name: "FavouriteMusicFiles",

  components: {
    MusicCards,
    NoResult
  },
  computed: {
    songs() {
      return this.$store.getters.getfavourites;
    }
  }
};
</script>

<style>
</style>