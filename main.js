const initMap = () => {
    const options = {
        center: {latitude: 47.00774402194879, longitude: 28.85061464753502},
        zoom: 8,
    }
    const map = new google.maps.Map(document.getElementById("map"), opt);
}


