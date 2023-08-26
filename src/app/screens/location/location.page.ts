import { Component, OnInit, NgZone, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

declare var google:any;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit,AfterViewInit {


  locationData:any;
  map:any;

  constructor(private ngZone: NgZone, private render:Renderer2, private elementRef:ElementRef) { }

  ngAfterViewInit(): void {
    this.loadMap();
  }

  ngOnInit() {
  
  }

  loadMap(){
    this.ngZone.run(()=>{
      this.locationData= new google.maps.LatLng(0,0);

      const options= {
          center:this.locationData,
          zoom:10,
          mapTypeId:google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.elementRef.nativeElement.querySelector('.map-container'), options);

      this.getCurrentLocation();

    });
  }

  getCurrentLocation(){
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.locationData=new google.maps.LatLng(
          position.coords.altitude,
          position.coords.longitude
        );

        this.map.setCenter(this.locationData);

        new google.maps.Marker({
          position:this.locationData,
          map:this.map,
          title:'mage hichchi gedara'
        });

      });
    }
  }

}
