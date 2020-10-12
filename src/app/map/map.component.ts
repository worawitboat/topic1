import { Component, OnInit } from '@angular/core';

declare const L: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor() { }


  ngOnInit() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    const food = [
      {
        name:"355 steak",
        latlng: [15.107047999999998, 104.91347519999999],
        img:"",
        des:""
      },
      {
        name:"xxx",
        latlng: [15.107247999999998, 104.92377519999999],
        img:"",
        des:""

      },
      {
        name:"yyy",
        latlng: [15.107547999999998, 104.91357519999999],
        img:"",
        des:""
      },

    ]

    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      const latLong2 = [15.107047999999998, 104.91347519999999];
      console.log(
        `lat: ${position.coords.latitude}, lng: ${position.coords.longitude}`
      );
      let mymap = L.map('map').setView(latLong, 13);

      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid29yYXdpdGJvYXQiLCJhIjoiY2tnNnA1cHgyMTVsbzJzbHd4djJsNjB5cCJ9.Gge5w2p3hKzPNKZ9kAJVrQ',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'pk.eyJ1Ijoid29yYXdpdGJvYXQiLCJhIjoiY2tnNnA1cHgyMTVsbzJzbHd4djJsNjB5cCJ9.Gge5w2p3hKzPNKZ9kAJVrQ',
        }
      ).addTo(mymap);

      let marker = L.marker(latLong).addTo(mymap);
      for(let i = 0;i < food.length ; i++){
        let store = L.marker(food[i].latlng).addTo(mymap);
        store.bindPopup('<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<center>' +
        '<img src="https://lh3.googleusercontent.com/p/AF1QipNkmwigiRz6uZeQm14ORdxc-0y2FktUK_izG6j5=w600-k" alt="Girl in a jacket" width="240" height="150">' +
        '<center/>' +
        '<h1 id="firstHeading" class="firstHeading">'+food[i].name+'</h1>' +
        '<div id="bodyContent">' +
        "</div>" +
        "</div>").openPopup();
      }


      marker.bindPopup('<b>Me</b>').openPopup();

    });
    this.watchPosition();
  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lng: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }

}



