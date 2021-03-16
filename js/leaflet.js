const Leaflet = () => {
    var mymap = L.map('mapid').setView([48.87317879924017, 2.3499006999513123], 13);
    mymap.dragging.disable();
    mymap.touchZoom.disable();
    mymap.doubleClickZoom.disable();
    mymap.scrollWheelZoom.disable();

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZW1lemVxMjAwIiwiYSI6ImNrbTdvcTIzZDEwNGoydm54dXVxeDlrMmkifQ.1sRsVzCRIcTvpqbi6sLP0A'
    }).addTo(mymap);

    var marker = L.marker([48.87317879924017, 2.3499006999513123]).addTo(mymap);

}

export default Leaflet;