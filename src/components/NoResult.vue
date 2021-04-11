<template>
  <div class="playlist_music_files">
    <div class="lead text-center mt-5">No Song Found</div>
    <div class="restore_all text-center mt-4" v-if="!showFavourities">
      <span class="restore_btn" @click="restoreSongs">Restore Songs</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoResult",
  computed: {
    showFavourities() {
      return this.$store.getters.showFavourities;
    }
  },
  methods: {
    restoreSongs: function() {
      this.$store.dispatch("restoreSongs");
    }
  }
};
</script>