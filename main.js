/*
  Here is a rough idea for the steps you could take:
*/
// 1. First select and store the elements you'll be working with
let button = document.querySelector('button')
let resultList = document.querySelector('.result-list')
let nowPlaying = document.querySelector('.now')
let audio = document.querySelector('audio')

// 2. Create your `submit` event for getting the user's search term

// 3. Create your `fetch` request that is called after a submission

button.addEventListener("click", function (searchEvent) {
let searchTerm = document.querySelector('#search').value
const promise = fetch(
  `https://itunes.apple.com/search?term=${searchTerm}&limit=15`
)
  .then(response => response.json())
  .then(musicResults => {
    resultList.innerHTML=""
    musicResults.results.forEach(function (musicData, index) {
      let musicBox = document.createElement('li')
      let bandName = document.createElement('h4')
      let songTitle = document.createElement('p')
      let image = document.createElement('img')
      let currentSong = document.querySelector('.now')

      image.src = musicData.artworkUrl100
      songTitle.textContent = musicData.trackName
      bandName.textContent = musicData.artistName

      musicBox.addEventListener('click', function(){
          audio.src = musicData.previewUrl
          currentSong.textContent = `"${musicData.trackName}" by ${musicData.artistName}`
      })
      resultList.appendChild(musicBox)
      musicBox.appendChild(image)
      musicBox.appendChild(songTitle)
      musicBox.appendChild(bandName)
    })
  })
})
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
