<template>
  <div id="app">
    <div class="wrapper">
      <NowPlaying />
      <PlaylistContainer :class="(showPlaylist) ? 'show_playlist' : ''" />
      <MusicProperties />
      <Nofication :class="(notificationStatus) ? 'bounceInLeft' : ''" />
    </div>
  </div>
</template>

<script>
import "./assets/css/style.css";
import NowPlaying from "./components/NowPlaying.vue";
import PlaylistContainer from "./components/PlaylistContainer.vue";
import MusicProperties from "./components/MusicProperties.vue";
import Nofication from "./components/Nofication.vue";

export default {
  name: "App",
  components: {
    NowPlaying,
    PlaylistContainer,
    MusicProperties,
    Nofication
  },
  computed: {
    showPlaylist() {
      return this.$store.getters.showPlaylist;
    },

    notificationStatus() {
      return this.$store.state.showNotificationMessage;
    }
  },
  methods: {
    getAllSongs: function() {
      this.$store.dispatch("getAllSongs");
    },

    addToCurrentSong: function() {
      this.$store.dispatch("addToCurrentSong");
    }
  },
  created() {
    // GET ALL SONGS WHEN COMPONENT LOADS
    this.getAllSongs();
    this.addToCurrentSong();
  }
};
</script>

<style>
</style>
