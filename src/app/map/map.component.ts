import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

declare const L: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(private location: Location) { }


  ngOnInit() {
    let type = history.state.type;


    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    const food = [
      {
        name: "355 de steak",
        latlng: [15.107047999999998, 104.91347519999999],
        img: "https://d1sag4ddilekf6.cloudfront.net/compressed/items/3-CZEGNP3ATNW3VX-CZEJLNE1G7KXC2/photo/menueditor_item_8a51584a46ea43c5b5e48f7d5d5458ff_1592631004188706026.jpg",
        des: "เมนู สเต๊ก, ข้าว, ของทานเล่น"
      },
      {
        name: "Mee jalern",
        latlng: [15.107247999999998, 104.92377519999999],
        img: "",
        des: ""

      },
      {
        name: "Basen",
        latlng: [15.107547999999998, 104.91357519999999],
        img: "https://scontent.fubp1-1.fna.fbcdn.net/v/t31.0-8/23213102_2046312892269683_7104564255025435699_o.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_eui2=AeGuPqsKjeeoQ6a3jniJbf0cENenlvX-J4oQ16eW9f4nitdE-YG01SULoR6oW87LZ5v4uH9St8wu8Hggsq_0H1Z6&_nc_ohc=BGRdW8BcCnYAX9Wk6dd&_nc_ht=scontent.fubp1-1.fna&oh=5e4393758590aca638421e5fcf304b38&oe=5FA82E15",
        des: ""
      },
    ]

    const noodle = [
      {
        name: "Basen",
        latlng: [15.107047999999998, 104.91347519999999],
        img: "https://scontent.fubp1-1.fna.fbcdn.net/v/t31.0-8/23213102_2046312892269683_7104564255025435699_o.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_eui2=AeGuPqsKjeeoQ6a3jniJbf0cENenlvX-J4oQ16eW9f4nitdE-YG01SULoR6oW87LZ5v4uH9St8wu8Hggsq_0H1Z6&_nc_ohc=BGRdW8BcCnYAX9Wk6dd&_nc_ht=scontent.fubp1-1.fna&oh=5e4393758590aca638421e5fcf304b38&oe=5FA82E15",
        des: ""
      },
      {
        name: "patthai bigP",
        latlng: [15.107247999999998, 104.92377519999999],
        img: "",
        des: ""

      },
      {
        name: "Go deng",
        latlng: [15.107547999999998, 104.91357519999999],
        img: "",
        des: ""
      },
    ]

    const drink = [
      {
        name: "came me",
        latlng: [15.108047999999998, 104.91447519999999],
        img: "",
        des: ""
      },
      {
        name: "three first",
        latlng: [15.103247999999998, 104.95377519999999],
        img: "",
        des: ""

      },
      {
        name: "monkey",
        latlng: [15.107947999999998, 104.92157519999999],
        img: "",
        des: ""
      },
    ]

    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLng = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lng: ${position.coords.longitude}`
      );
      let ran = Math.floor(Math.random() * 3);
      console.log(food[ran]);

      let mymap = L.map('map').setView(food[ran].latlng, 13);


      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid29yYXdpdGJvYXQiLCJhIjoiY2tnNnA1cHgyMTVsbzJzbHd4djJsNjB5cCJ9.Gge5w2p3hKzPNKZ9kAJVrQ',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 13,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'pk.eyJ1Ijoid29yYXdpdGJvYXQiLCJhIjoiY2tnNnA1cHgyMTVsbzJzbHd4djJsNjB5cCJ9.Gge5w2p3hKzPNKZ9kAJVrQ',
        }
      ).addTo(mymap);

      let marker = L.marker(latLng).addTo(mymap);
      if (type == 'food') {

        for (let i = 0; i < food.length; i++) {

          let store = L.marker(food[i].latlng).addTo(mymap);
          store.bindPopup(
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<center>' +
            '<img src="' + food[i].img + '"alt="Girl in a jacket" width="240" height="150">' +
            '<center/>' +
            '<h1 id="firstHeading" class="firstHeading">' + food[i].name + '</h1>' +
            '<div id="bodyContent">' +
            '<h4>' + food[i].des + '</h4>' +
            "</div>" +
            "</div>").openPopup();

        }
      } else if (type == 'noodle') {
        for (let i = 0; i < noodle.length; i++) {
          let store = L.marker(noodle[i].latlng).addTo(mymap);
          store.bindPopup(
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<center>' +
            '<img src="' + noodle[i].img + '"alt="Girl in a jacket" width="240" height="150">' +
            '<center/>' +
            '<h1 id="firstHeading" class="firstHeading">' + noodle[i].name + '</h1>' +
            '<div id="bodyContent">' +
            '<h4>' + noodle[i].des + '</h4>' +
            "</div>" +
            "</div>").openPopup();
        }
      } else if (type == 'drink') {
        for (let i = 0; i < drink.length; i++) {
          let store = L.marker(drink[i].latlng).addTo(mymap);
          store.bindPopup(
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<center>' +
            '<img src="' + drink[i].img + '"alt="Girl in a jacket" width="240" height="150">' +
            '<center/>' +
            '<h1 id="firstHeading" class="firstHeading">' + drink[i].name + '</h1>' +
            '<div id="bodyContent">' +
            '<h4>' + drink[i].des + '</h4>' +
            "</div>" +
            "</div>").openPopup();
        }
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



