<template>
  <div class="playlist_header" @click="closePlaylistPropertise">
    <div class="playlist_header_content">
      <div class="close_playlist" @click="closePlaylist">&times;</div>
      <h5 class="font-weight-bold">{{playlistName}} ({{getSongCount}})</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicPlaylistHeader",
  computed: {
    playlistName() {
      return this.$store.getters.playlistName;
    },
    getSongCount() {
      return this.$store.getters.getSongCount;
    }
  },
  methods: {
    closePlaylist: function() {
      this.$store.dispatch("closePlaylist");
    },
    closePlaylistPropertise: function() {
      this.$store.dispatch("closePlaylistPropertise");
    }
  }
};
</script>

<style>
</style>