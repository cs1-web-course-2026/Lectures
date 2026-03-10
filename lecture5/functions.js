function countPosts(posts) {
  return posts.length;
}

let playlist = ['Track 1', 'Track 2', 'Track 3'];
playlist.forEach((track) => console.log('🎵 ' + track));

// Example usage of countPosts with mock data
const mockPosts = ['Post 1', 'Post 2', 'Post 3'];
console.log('Total posts:', countPosts(mockPosts));

// Example using map with simple objects
const tracks = [
  { singer: 'Alice', listened: 9 }, // 1
  { singer: 'Bob', listened: 7 }, // 2
  { singer: 'Charlie', listened: 35 }, // 3
];

const songsListened = tracks.map(
  (track) => `${track.singer}: ${track.listened}`,
);

const singers = tracks.map((track) => track.singer);

console.log('songsListened:', songsListened);
console.log('singers:', singers);
