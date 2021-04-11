// GET SONGS
export const getSongs = (state) => {
  return state.songs;
};

// GET FAVOURITE SONGS
export const getfavourites = (state) => {
  return state.songs.filter((favourities) => favourities.favourite == true);
};

// GET REPEATING SONG STATUS
export const isRepeatSong = (state) => {
  return state.repeatSong;
};

// GET RANDOM SONG STATUS
export const isRandomSong = (state) => {
  return state.playRandomSong;
};

// GET SONG IF CURRENT SONG IS EQUAL TO THE SPECIFIC SONG IN ARRAY
export const getFavouriteColor = (state) => {
  return (isAvaliable) => {
    return state.songs.filter((item) => item.id == isAvaliable.id);
  };
};

// GET PLAYLIST NAME
export const playlistName = (state) => {
  return state.playlistName;
};

// GET SHOW PLAYING MUSIC STATUS
export const showPlayingMusics = (state) => {
  return state.showPlayingMusics;
};

// GET THE CURRENT PLAYING SONG
export const showPlayingSongPropertises = (state) => {
  return state.showPlayingSongPropertises;
};

// GET THE STATUS OF REVEAL PROPERTIES
export const revealProperties = (state) => {
  return state.revealProperties;
};

// SHOW PLAYLIST
export const showPlaylist = (state) => {
  return state.showPlaylist;
};

// SHOW FAVOURITES
export const showFavourities = (state) => {
  return state.showFavourities;
};

// PLAYLIST PROPERTIES
export const showPlaylistPropertise = (state) => {
  return state.showPlaylistPropertise;
};

// SONG PROPERTIES
export const songPropertise = (state) => {
  return state.songPropertise;
};

// GET CURRENT SONG
export const current = (state) => {
  return state.current;
};

// GET IS PLAYING STATUS
export const isPlaying = (state) => {
  return state.isPlaying;
};

// GET NOTIFICATION MESSAGE
export const notificationMessage = (state) => {
  return state.notificationMessage;
};

// GET SONG COUNT
export const getSongCount = (state) => {
  let count = null;
  var getCount = state.songs.length;

  if (state.showFavourities == true) {
    count = state.songs.filter((favourities) => favourities.favourite == true);
    getCount = count.length;
  } else {
    getCount = state.songs.length;
  }

  return getCount;
};
