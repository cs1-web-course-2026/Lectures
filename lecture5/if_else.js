const MOODS = {
  SLEEPY: 'sleepy',
  HAPPY: 'happy',
  MOTIVATED: 'motivated',
};

const PLAYLISTS_BY_MOOD = {
  [MOODS.SLEEPY]: 'Play upbeat playlist 🎶',
  [MOODS.MOTIVATED]: 'Play hardstyle 😎',
};

function getPlaylistByMood(mood) {
  if (mood === MOODS.HAPPY) {
    console.log('Play upbeat playlist 🎶');
  } else if (mood === MOODS.SLEEPY) {
    console.log('Play chill lo-fi 😴');
  } else if (mood === MOODS.MOTIVATED) {
    console.log('Play hardstyle 😎');
  } else {
    console.log('Silence...');
  }
}

// getPlaylistByMood(MOODS.HAPPY);
// getPlaylistByMood(MOODS.SLEEPY);
// getPlaylistByMood(MOODS.MOTIVATED);
// getPlaylistByMood('asddsafsafd');

console.log(PLAYLISTS_BY_MOOD[MOODS.MOTIVATED]);
console.log(PLAYLISTS_BY_MOOD[MOODS.SLEEPY]);
console.log(PLAYLISTS_BY_MOOD['asdfsdaf']);

// function getPlaylistByMoodSwitch(mood) {
//   switch (mood) {
//     case MOODS.HAPPY:
//       console.log('Play upbeat playlist 🎶');
//       break;
//     case MOODS.SLEEPY:
//       console.log('Play chill lo-fi 😴');
//       break;
//     case MOODS.MOTIVATED:
//       console.log('Play hardstyle 😎');
//       break;
//     default:
//       console.log('Silence...');
//   }
// }

// getPlaylistByMoodSwitch(MOODS.HAPPY);
// getPlaylistByMoodSwitch(MOODS.SLEEPY);
// getPlaylistByMoodSwitch(MOODS.MOTIVATED);
// getPlaylistByMoodSwitch('asddsafsafd');
