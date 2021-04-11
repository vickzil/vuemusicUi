<template>
  <div class="playlist_view_more" v-if="showPlaylistPropertise">
    <div class="view_more_close" @click="closePlaylistPropertise">&times;</div>
    <div class="clear"></div>
    <div class="playlist_icons" @click="addAsFavourite()">
      <i class="fa fa-heart" :class="songPropertise.favourite == true ? 'activated' : ''"></i>
      <span>{{(songPropertise.favourite == true) ? 'Remove from favourite' : 'Add to favourite'}}</span>
    </div>


    <div class="playlist_icons" @click="showFavouritePage" v-if="songPropertise.favourite == true" title="View Favourites">
      <i class="fa fa-eye"></i>
      <span>View Favourites</span>
    </div>

    <div class="playlist_icons" @click="playSong" title="Play">
      <i class="fa fa-play"></i>
      <span>Play</span>
    </div>
    <div class="playlist_icons showCurrentMusic" @click="closePlaylist" title="Now Playing">
      <i class="fa fa-eye"></i>
      <span>Now Playing</span>
    </div>

    <div class="playlist_icons showProperTise" @click="showCurrentSongProperties" title="Song Properties">
      <i class="fa fa-map-signs"></i>
      <span>Properties</span>
    </div>

    <div class="playlist_icons" @click="deleteSong" title="Delete song">
      <i class="fa fa-trash"></i>
      <span>Delete</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaylistViewMore",
  computed: {
    showPlaylistPropertise() {
      return this.$store.getters.showPlaylistPropertise;
    },
    songPropertise() {
      return this.$store.getters.songPropertise;
    },
    current() {
      return this.$store.getters.current;
    },
    getfavourites() {
      return this.$store.getters.getfavourites;
    }
  },
  methods: {
    addAsFavourite: function() {
      this.$store.dispatch("addAsFavourite", this.songPropertise);
      this.closePlaylistPropertise();
    },
    closePlaylistPropertise: function() {
      this.$store.dispatch("closePlaylistPropertise");
    },
    showCurrentSongProperties: function() {
      this.$store.dispatch("showCurrentSongProperties", this.songPropertise);
    },

    playSong: function() {
      this.$store.dispatch("playSong", this.songPropertise);
    },
    closePlaylist: function() {
      this.$store.dispatch("closePlaylist");
    },
    deleteSong: function() {
      this.$store.dispatch("deleteSong", this.songPropertise);
      this.closePlaylistPropertise();
    },
    showFavouritePage: function() {
      this.$store.dispatch("showFavouritePage");
    }
  }
};
</script>

<style>
</style>