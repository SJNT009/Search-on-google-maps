const initMap = () => {
    const options = {
        center: {latitude: 47.00774402194879, longitude: 28.85061464753502},
        zoom: 8,
    }

    const map = new google.maps.Map(document.getElementById("map"), opt)

    // const marker = new google.maps.Marker({
    //     position: {latitude: 47.00774402194879, longitude: 28.85061464753502},
    //     map: map,
    //   });
}
  
//=============== Victoria's Task ===============\\

const suggestionedPlaces = [
    // {placeName: "Chisinau", lat: , long: },
    // {placeName: "Dublin", lat: , long: },
    // {placeName: "Paris", lat: , long: },
    // {placeName: "Canberra", lat: , long: },

    "Chisinau", "Dublin", "Paris", "Canberra"
]

const wrapper = document.createElement("div")
wrapper.classList.add("wrapper")
document.body.prepend(wrapper)

const searcher = document.createElement("div")
searcher.classList.add("search-input")
wrapper.append(searcher)

const input = document.createElement("input")
input.setAttribute("type", "text")
input.setAttribute("placeholder", "Search a place")
searcher.append(input)

const autocomplete = document.createElement("div")
autocomplete.classList.add("autocom-box")
searcher.append(autocomplete)

const wrapSearch = document.querySelector(".search-input")
const inputbox = wrapSearch.querySelector("input")
const suggestions = wrapSearch.querySelector(".autocom-box");

inputbox.onkeyup = (e) => {
    const usersRequest = e.target.value;
    if (usersRequest) {
        const suggested = suggestionedPlaces.filter((request) => {
            return request.toLocaleLowerCase().startsWith(usersRequest.toLocaleLowerCase())
        })
        const s = suggested.map((request) => {
            return request = `<li>` + request + `</li>`
        })
        wrapSearch.classList.add("active")
        dropDownSuggest(s)
        const wholeList = suggestions.querySelectorAll("li")
        for (let i = 0; i < wholeList.length; i++) {
            wholeList[i].setAttribute("onclick", "select(this)")            
        }
    } else{
        wrapSearch.classList.remove("active")
    }
}

// const selected = (element) => {
//     const select = element.textContent
//     console.log(select)
// }

const dropDownSuggest = (list) => {
    let listPlaces;
    if (!list.length) {
        const notFound = inputbox.value
        listPlaces = `<li>` + notFound + `</li>`
    }else{
        listPlaces = list.join('')
    }
    suggestions.innerHTML = listPlaces
}

//===================== END =====================\\

