// STORE SONGS FROM API
export const GET_ALL_SONGS = (state, songs) => {
  state.songs = songs;
};

export const RESTORE_ALL_SONGS = (state, songs) => {
  state.songs = songs;
};

// STORE SONGS FROM API TO CURRENT SONG AS PAGE LOADS
export const ADD_TO_CURRENT_SONG = (state) => {
  state.index = Math.floor(Math.random() * state.songs.length);
  state.current = state.songs[state.index];
  state.player.src = state.current.src;
};

// PLAY SONG
export const PLAY_SONG = (state, song) => {
  // Check if song is undefined
  if (typeof song.src != "undefined") {
    if (state.current.src == song.src) {
      // continue playing current song after music paused
      state.player.play();
    } else {
      // if no current song, set current song to song passed in params and play
      state.current = song;
      state.player.src = state.current.src;
    }
  }
  state.player.play();

  // MUSIC ENDED, PLAY NEXT SONG
  state.player.addEventListener(
    "ended",
    function () {
      state.isPlaying = false;
      if (state.songs.length == 0) {
        state.player.pause();
        state.isPlaying = false;
        state.showNotificationMessage = true;
        state.notificationMessage = "No Song to Play";
        // Hide and Empty Notification after 3.2seconds
        setTimeout(() => {
          state.showNotificationMessage = false;
          state.notificationMessage = "";
        }, 3200);
        return;
      }
      if (state.repeatSong == true) {
        // repeat same song if repeat is True
        state.player.src = state.current.src;
        state.player.play();
      } else if (state.playRandomSong == true) {
        // play song randomly if Random song is True
        state.index = Math.floor(Math.random() * state.songs.length);
      } else {
        // If  repeat and Random is false, play next song correspondingly
        state.index++;
        if (state.index > state.songs.length - 1) {
          //if next song is the last song, then reset the index to 0 and play the first song in order
          state.index = 0;
        }
        state.current = state.songs[state.index];
        state.player.src = state.current.src;
        state.player.play();
        state.isPlaying = true;
      }
    }.bind(state)
  );
  state.isPlaying = true;
  state.showPlaylist = false;
  state.showPlaylistPropertise = false;
};

// PAUSE SONG
export const PAUSE_SONG = (state) => {
  state.player.pause();
  state.isPlaying = false;
};

// NEXT SONG
export const NEXT_SONG = (state) => {
  if (state.songs.length == 0) {
    state.player.pause();
    state.isPlaying = false;
    state.showNotificationMessage = true;
    state.notificationMessage = "No Song to Play";
    // Hide and Empty Notification after 3.2seconds
    setTimeout(() => {
      state.showNotificationMessage = false;
      state.notificationMessage = "";
    }, 3200);
    return;
  }
  if (state.playRandomSong == true) {
    //Play random song if Random is true
    state.index = Math.floor(Math.random() * state.songs.length);
  }
  state.index++;
  if (state.index > state.songs.length - 1) {
    state.index = 0;
  }

  state.current = state.songs[state.index];
  state.player.src = state.current.src;

  if (state.isPlaying == true) {
    state.player.play();
  }
};

// PREVIOUS SONG
export const PREV_SONG = (state) => {
  state.index--;
  if (state.index < 0) {
    //if index is the last song, reset index
    state.index = state.songs.length - 1;
  }
  state.current = state.songs[state.index];
  state.player.src = state.current.src;
  if (state.isPlaying == true) {
    state.player.play();
  }
};

// REPEAT SONG
export const REPEAT_SONG = (state) => {
  state.repeatSong = !state.repeatSong;
  // Set Notification to false and empty
  state.showNotificationMessage = false;
  state.notificationMessage = "";

  // Check the status of repeat song since we toggled the value
  if (state.repeatSong == true) {
    //If true, repeat song is ON
    state.showNotificationMessage = true;
    state.notificationMessage = "Repeat ON";
  } else {
    state.showNotificationMessage = true;
    state.notificationMessage = "Repeat OFF";
  }

  // Hide and Empty Notification after 3.2seconds
  setTimeout(() => {
    state.showNotificationMessage = false;
    state.notificationMessage = "";
  }, 3200);
};

// REPEAT SONG
export const PLAY_RANDOM_SONG = (state) => {
  state.playRandomSong = !state.playRandomSong;

  // clear Notifications
  state.showNotificationMessage = false;
  state.notificationMessage = "";

  if (state.playRandomSong == true) {
    //If random song is True, Random is ON
    state.showNotificationMessage = true;
    state.notificationMessage = "Random ON";
  } else {
    state.showNotificationMessage = true;
    state.notificationMessage = "Random OFF";
  }

  // Clear Notification
  setTimeout(() => {
    state.showNotificationMessage = false;
    state.notificationMessage = "";
  }, 3200);
};

// CHANGE MUSIC VOLUME
export const CHANGE_VOLUME = (state, event) => {
  state.player.volume = event;
};

// SHOW PLAYLIST PAGE
export const SHOW_PLAYLIST = (state) => {
  state.showPlaylist = true;
  state.showPlaylistPropertise = false;
  state.showFavourities = false;
  state.playlistName = "Playlist";
};

// HIDE PLAYLIST
export const CLOSE_PLAYLIST = (state) => {
  state.showPlaylist = false;
  state.showFavourities = false;
  state.playlistName = "Playlist";
};

// SHOW FAVOURITE SONG
export const SHOW_FAVOURITE_PAGE = (state) => {
  state.showFavourities = true;
  state.playlistName = "Favourites";
  state.showPlaylistPropertise = false;
};

// ADD SONG AS FAVOURITE
export const ADD_AS_FAVOURITE = (state, song) => {
  // CHECK IF SONG IS ALREADY IN FAVOURITE
  let inFavourite = state.songs.find((item) => {
    return item.id == song.id;
  });

  // Toggle Favourite song and add coresponding Notifications
  if (inFavourite) {
    inFavourite.favourite = !inFavourite.favourite;
    setTimeout(() => {
      if (inFavourite.favourite == true) {
        state.showNotificationMessage = true;
        state.notificationMessage = " Added to Favourite";
      } else {
        state.showNotificationMessage = true;
        state.notificationMessage = "Removed from Favourite";
      }
    }, 700);

    // HIDE NOTIFICATON AFTER 3.2SECONDS
    setTimeout(() => {
      state.showNotificationMessage = false;
      state.notificationMessage = "";
    }, 3200);
    return;
  }
};

// OPEN PLAYLIST PROPERTISE
export const OPEN_PLAYLIST_PROPERTISE = (state, song) => {
  state.songPropertise = song;
  state.showPlaylistPropertise = false;
  setTimeout(() => {
    state.showPlaylistPropertise = true;
  }, 700);

  state.songPropertise = song;
};

// CLOSE PLAYLIST PROPERTISE
export const CLOSE_PLAYLIST_PROPERTISE = (state) => {
  state.showPlaylistPropertise = false;
};


// SHOW CURRENT SONG DETAILS
export const SHOW_CURRENT_SONG_PROPERTIES = (state, song) => {
  state.songPropertise = song;
  state.revealProperties = true;
  state.showPlaylistPropertise = false;
  state.showPlayingSongPropertises = false;
};

// HIDE_CURRENT_SONG_DETAILS
export const HIDE_CURRENT_SONG_PROPERTIES = (state) => {
  state.revealProperties = false;
  state.showPlayingSongPropertises = false;
};

// SHOW PLAYING MUSIC
export const SHOW_PLAYING_MUSIC = (state) => {
  state.showPlayingMusics = true;
  state.showPlaylistPropertise = false;
};

// HIDE PLAYING MUSIC
export const REMOVE_PLAYING_MUSIC = (state) => {
  state.showPlayingMusics = false;
  state.showPlaylistPropertise = false;
};

// DELETE A SONG
export const DELETE_SONG = (state, song) => {
  // Check if the song to be removed is added as favourite and change the status to false
  if (state.showFavourities == true) {
    let inFavourite = state.songs.find((item) => {
      return item.id == song.id;
    });

    // If deleted  song is added as favourite, reset value and show corresponding Notification
    if (inFavourite) {
      inFavourite.favourite = false;

      state.showNotificationMessage = false;
      state.notificationMessage = "";
      setTimeout(() => {
        state.showNotificationMessage = true;
        state.notificationMessage = "song deleted";
      }, 700);

      setTimeout(() => {
        state.showNotificationMessage = false;
        state.notificationMessage = "";
      }, 3200);
      return;
    }

    return;
  }

  // Delete the song
  state.songs = state.songs.filter((item) => {
    return item.id !== song.id;
  });

  // Show corresponding Notifications
  state.showNotificationMessage = false;
  state.notificationMessage = "";
  setTimeout(() => {
    state.showNotificationMessage = true;
    state.notificationMessage = "song deleted";
  }, 700);

  setTimeout(() => {
    state.showNotificationMessage = false;
    state.notificationMessage = "";
  }, 3200);
};