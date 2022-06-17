const API = "https://kitsu.io/api/edge";
const api_full = "https://kitsu.io/api/edge/manga"

const search = document.querySelector('.search')
const form = document.querySelector(".form")
const content = document.querySelector(".content")


form.addEventListener('submit', event =>{
    event.preventDefault()
    const searchTerm = search.value.trim()

    if(!searchTerm){
        alert("You must type a valid search term")
        return 
    }
    searchManga(searchTerm)

})

async function searchManga(search){
    const request = await fetch(`${API}/manga?filter[text]=${search}`)
    const response = await request.json()
    const mangas = response
    showMangas(mangas)
}
async function Manga(api_full,name){
    const request = await fetch(`${API}/manga?filter[text]=${name}`)
    const response = await request.json()
    const mangas = response
    showMangas(mangas)
}

function showMangas(mangas){
    content.innerHTML = `
    ${mangas.data.map(manga =>{
        return `
        <div class="rounded-2xl shadow-2xl px-4">
        <img src="${manga.attributes.posterImage.small}" alt="" class="mx-auto rounded-lg" >
        <div class="px-6 py-1 sm:py-4">
            <h2 class="text-black font-semibold">${manga.attributes.titles.en_jp}</h2>
            <p  class="text-black">Inicio en el año ${manga.attributes.startDate}</p>
            <p  class="text-black">Finalizo en el año ${manga.attributes.endDate}</p>
          </div>
        </div>`
    }).join("")}
    `
}

Manga(api_full,"Gantz")