<template>
  <div class="music_propertise" v-if="revealProperties">
    <div class="propertise_container">
      <h3>File propertise</h3>
      <p>
        <span>Song Name:</span>
        {{songPropertise.title}}
      </p>
      <p>
        <span>Song Duration:</span>
        {{songPropertise.duration}}
      </p>
      <p>
        <span>Artist Name:</span>
        {{songPropertise.artist}}
      </p>
      <p>
        <span>modified Date:</span>
        {{songPropertise.date_modified}}
      </p>

      <p class="removePropertise" @click="hideCurrentSongProperties">OK</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicProperties",
  computed: {
    songPropertise() {
      return this.$store.getters.songPropertise;
    },
    revealProperties() {
      return this.$store.getters.revealProperties;
    }
  },
  methods: {
    showCurrentSongProperties: function() {
      this.$store.dispatch("showCurrentSongProperties");
    },
    hideCurrentSongProperties: function() {
      this.$store.dispatch("hideCurrentSongProperties");
    }
  }
};
</script>

<style>
</style>