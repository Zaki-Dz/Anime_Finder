const api = 'https://api.jikan.moe/v4/anime?q='
const results = document.querySelector('.results')
const searchBtn = document.querySelector('.search-box button')

const loading = document.querySelector('.loading')

function getAnimes() {
	loading.style.display = 'block'
	const search = document.querySelector('.search')
	let text = search.value
	fetch(api + text)
		.then(res => res.json())
		.then(data => {
			animes = data.data
			results.innerHTML = animes
				.map(anime => {
					let title = anime.title
					let img = anime.images.jpg.large_image_url
					let score = anime.score
					return `<div class="result">
                    <img src=${img}>
                    <h1 class="title">${title}</h1>
                    <h1 class="score">${score}</h1>
                  </div>`
				})
				.join('')
			loading.style.display = 'none'
		})
		.catch(err => {
			console.log(err)
		})
}

searchBtn.addEventListener('click', getAnimes)

const body = document.querySelector('body')
const header = document.querySelector('header')
const toggleTheme = document.querySelector('.theme')
let ind = false

toggleTheme.addEventListener('click', () => {
	header.classList.toggle('dark-header')
	body.classList.toggle('dark')
})
