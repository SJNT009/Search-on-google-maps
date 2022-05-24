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
    {placeName: "Chisinau", lat: 1, long: 2},
    {placeName: "Dublin", lat: 3, long: 4},
    {placeName: "Paris", lat: 5, long: 6},
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

const places = document.createElement("ul")

suggestionedPlaces.forEach(element => {
    const list = document.createElement("li");
    list.textContent = element.placeName;
    places.append(list);
});
autocomplete.append(places);

const wrapSearch = document.querySelector(".search-input")
const inputbox = wrapSearch.querySelector("input")
const suggestions = wrapSearch.querySelector(".autocom-box");

inputbox.onkeyup = (e) => {
    const usersRequest = e.target.value;
    if (usersRequest) {
        const suggested = suggestionedPlaces.filter((request) => {
            return request.placeName.toLocaleLowerCase().startsWith(usersRequest.toLocaleLowerCase())
        })

        // const s = suggested.map((request) => {
        //     return request = '<li>' + request + '</li>';
        // })
        // console.log(suggested);

    }
}


//===================== END =====================\\