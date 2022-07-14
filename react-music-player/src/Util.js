export const playAudio = (isPlaying, audioRef) => {
  // check if the song is playing:
  if (isPlaying) {
    // create a play promise:
    const playPromise = audioRef.current.play();
    // if the audio is undefined (hasnt loaded yet):
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
  // make the song play when we click it from the Library
  // audioRef.current.play();
};
