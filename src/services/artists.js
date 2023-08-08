async function getArtists() {
  const artists = (await fetch(`https://www.analogstudios.net/api/artists`)
    .then(resp => resp.json()))

  return artists;
}

export { getArtists };