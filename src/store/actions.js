import allSongs from "../api/songs";

// GET SONGS FROM API
let songs = allSongs.songs();

// GET ALL SONGS
export const getAllSongs = ({ commit }) => {
  commit("GET_ALL_SONGS", songs);
};

// RESTORE ALL SONGS
export const restoreSongs = ({ commit }) => {
  commit("RESTORE_ALL_SONGS", songs);
};

// ADD TO CURENT SONG
export const addToCurrentSong = ({ commit }) => {
  commit("ADD_TO_CURRENT_SONG", songs);
};

// PLAY SONG
export const playSong = ({ commit }, song) => {
  commit("PLAY_SONG", song);
};
// PAUSE SONG
export const pauseSong = ({ commit }) => {
  commit("PAUSE_SONG");
};
// NEXT SONG
export const nextSong = ({ commit }) => {
  commit("NEXT_SONG");
};

// PREVIOUS SONG
export const prevSong = ({ commit }) => {
  commit("PREV_SONG");
};

// REPEAT SONG
export const repeatSong = ({ commit }) => {
  commit("REPEAT_SONG");
};

// REPEAT SONG
export const playRandomSong = ({ commit }) => {
  commit("PLAY_RANDOM_SONG");
};

// SHOW PLAYLIST
export const openPlaylist = ({ commit }) => {
  commit("SHOW_PLAYLIST");
};

// CLOSE PLAYLIST
export const closePlaylist = ({ commit }) => {
  commit("CLOSE_PLAYLIST");
};

// SHOW FAVOURITE PAGE
export const showFavouritePage = ({ commit }) => {
  commit("SHOW_FAVOURITE_PAGE");
};

// ADD SONGS AS FAVOURITES
export const addAsFavourite = ({ commit }, song) => {
  commit("ADD_AS_FAVOURITE", song);
};

// CAHNGE SONG VOLUME
export const changeVolume = ({ commit }, event) => {
  commit("CHANGE_VOLUME", event);
};

// DELETE SONG
export const deleteSong = ({ commit }, song) => {
  commit("DELETE_SONG", song);
};

// OPEN PLAYLIST PROPERTISE
export const openPlaylistPropertise = ({ commit }, song) => {
  commit("OPEN_PLAYLIST_PROPERTISE", song);
};

// CLOSE PLAYLIST PROPERTISE
export const closePlaylistPropertise = ({ commit }) => {
  commit("CLOSE_PLAYLIST_PROPERTISE");
};

// SHOW PLAYING MUSIC
export const showPlayingMusic = ({ commit }) => {
  commit("SHOW_PLAYING_MUSIC");
};

// REMOVE PLAYING MUSIC
export const removePlayingMusics = ({ commit }) => {
  commit("REMOVE_PLAYING_MUSIC");
};

// SHOW PLAYING SONG PROPERTISE
export const showPlayingMusicPropertises = ({ commit }) => {
  commit("SHOW_PLAYING_SONG_PROPERTISES");
};

// SHOW PLAYING SONG PROPERTISE
export const showCurrentSongProperties = ({ commit }, song) => {
  commit("SHOW_CURRENT_SONG_PROPERTIES", song);
};

// HIDE PLAYING SONG PROPERTISE
export const hideCurrentSongProperties = ({ commit }) => {
  commit("HIDE_CURRENT_SONG_PROPERTIES");
};
