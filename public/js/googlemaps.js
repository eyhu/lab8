function initMap() {
    // Create center marker at UCSD
    //var ucsd_ltlng = {lat:32.880, lng:-117.236};
    var ccic_ltlng = {lat:32.88500685, lng:-117.24131984};

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: ccic_ltlng,
        zoom: 15
    });

    var marker = new google.maps.Marker({
        position: ccic_ltlng,
        map: map,
        title: 'CCIC'
    });
}