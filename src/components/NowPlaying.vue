<template>
  <div class="now_playing" @click="closePlaylistPropertise">
    <div class="now_playing_container">
      <div class="img_container">
        <img :src="current.img" :alt="current.title" />
      </div>

      <div class="now_playing_bottom">
        <div class="imageplaying" :class="(isPlaying && volume > 0) ? '' : 'hidden_visibility' ">
          <img src="../assets/img/playing.gif" alt />
        </div>
        <div class="now_playing_music_title">{{current.title}}</div>
        <div class="now_playing_music_artist">
          <span>{{current.artist}}</span>
        </div>
        <div class="now_playing_music_volume">
          <div class="volume_inline">
            <span
              class="volume_icon mr-1"
              style="font-size: 11px; display: inline;"
              v-if="volume == 0"
            >Mute</span>
            <span class="volume_icon">
              <i class="fa fa-volume-off" :class="(volume <= 0) ? 'activated' : ''"></i>
            </span>
            <input
              type="range"
              class="custom-range"
              min="0"
              max="1"
              step="0.01"
              value="0.8"
              id="customRange2"
              title="Volume"
              v-model="volume"
              @change="changeVolume($event)"
            />
            <i class="fa fa-volume-up volume_icon" :class="(volume >= 1) ? 'activated' : ''"></i>
          </div>
        </div>
        <div class="now_playing_music_controls">
          <i
            class="fa fa-heart"
            title="Favourite"
            @click="addAsFavourite"
            :class="(getFavouriteColor) ? 'activated' : ''"
          ></i>

          <span>
            <i class="fa fa-backward" @click="prevSong" title="Previous Song"></i>
            <i class="fa fa-play playMusic" v-if="!isPlaying" @click="playSong" title="Play Song"></i>
            <i class="fa fa-pause pauseMusic" v-else @click="pauseSong" title="Pause song"></i>
            <i class="fa fa-forward" @click="nextSong" title="Next song"></i>
          </span>
          <span class="repeat_music" title="Repeat song" @click="repeatSong">
            <i class="fa fa-retweet" :class="(isRepeatSong) ? 'activated' : ''"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="burger" title="Open playlist" v-if="!showPlaylist" @click="openPlaylist">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NowPlaying",
  data() {
    return {
      volume: 0.8
    };
  },
  computed: {
    getFavouriteColor() {
      return this.current.favourite == true ? true : false;
    },
    current() {
      return this.$store.getters.current;
    },

    isPlaying() {
      return this.$store.getters.isPlaying;
    },

    isRepeatSong() {
      return this.$store.getters.isRepeatSong;
    },
    showPlaylist() {
      return this.$store.getters.showPlaylist;
    }
    // isRandomSong() {
    //   return this.$store.getters.isRandomSong;
    // }
  },
  methods: {
    addAsFavourite: function() {
      this.$store.dispatch("addAsFavourite", this.current);
      this.closePlaylistPropertise();
    },
    // removePlayingMusics: function() {
    //   this.$store.dispatch("removePlayingMusics");
    // },
    closePlaylistPropertise: function() {
      this.$store.dispatch("closePlaylistPropertise");
    },
    openPlaylist: function() {
      this.$store.dispatch("openPlaylist");
    },
    // showPlayingMusicPropertises: function() {
    //   this.$store.dispatch("showPlayingMusicPropertises");
    // },
    // showCurrentSongProperties: function() {
    //   this.$store.dispatch("showCurrentSongProperties");
    // },
    // hideCurrentSongProperties: function() {
    //   this.$store.dispatch("hideCurrentSongProperties");
    // },
    playSong: function() {
      this.$store.dispatch("playSong", this.current);
    },
    pauseSong: function() {
      this.$store.dispatch("pauseSong");
    },
    nextSong: function() {
      this.$store.dispatch("nextSong");
    },
    prevSong: function() {
      this.$store.dispatch("prevSong");
    },
    repeatSong: function() {
      this.$store.dispatch("repeatSong");
    },
    playRandomSong: function() {
      this.$store.dispatch("playRandomSong");
    },
    changeVolume: function(event) {
      this.$store.dispatch("changeVolume", this.volume);
    }
  }
};
</script>

<style>
</style>