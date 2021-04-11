<template>
  <div class="music_songs mb-3">
    <div class="music_song_left" @click="playSong">
      <img :src="song.img" :alt="song.title" />
      <div class="music_title" :class="(isPlaying) ? 'playingActive' : ''">
        <span class="music_name">{{song.title}}</span>
        <span class="music_artist">{{song.artist}}</span>
      </div>
    </div>
    <i class="fa fa-ellipsis-v showPlayListProperTise" @click="openPlaylistPropertise" title="More"></i>
  </div>
</template>

<script>
export default {
  name: "MusicCards",
  props: ["song"],
  computed: {
    showPlaylist() {
      return this.$store.getters.showPlaylist;
    },
    current() {
      return this.$store.getters.current;
    },
    showPlaylistPropertise() {
      return this.$store.getters.showPlaylistPropertise;
    },
    isPlaying() {
      if (this.$store.state.isPlaying == true) {
        return this.song.src == this.current.src ? true : false;
      }
    }
  },
  methods: {
    openPlaylistPropertise: function() {
      this.$store.dispatch("openPlaylistPropertise", this.song);
    },
    playSong: function() {
      this.$store.dispatch("playSong", this.song);
    }
  }
};
</script>

<style>
</style>