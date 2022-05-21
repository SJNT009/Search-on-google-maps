const initMap = () => {
    const options = {
        center: {latitude: 47.00774402194879, longitude: 28.85061464753502},
        zoom: 8,
    }
    const map = new google.maps.Map(document.getElementById("map"), opt)
}

//=============== Victoria's Task ===============\\

const places = []

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

places.forEach(element => {
    const list = document.createElement("li")
    list.textContent = element;
    autocomplete.append(list);
});





//===================== END =====================\\