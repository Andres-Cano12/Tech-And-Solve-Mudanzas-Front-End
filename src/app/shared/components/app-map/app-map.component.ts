import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { GMap } from "primeng/gmap";
import { ToastrService } from "ngx-toastr";
import { ComponentMode } from "app/shared/enums/component-mode";
import { FormGroup, FormControl, Validators } from "@angular/forms";

declare var google: any;

@Component({
    selector: 'app-map',
    templateUrl: './app-map.component.html'
})
export class AppMapComponent implements OnInit {

    @Input() mode: ComponentMode = ComponentMode.create;
    @Input() permissions: string = "all";
    @Input() formGroup: FormGroup;

    @Output() locationChange = new EventEmitter();
    @Output() addressChange = new EventEmitter();
    @Output() locationUpdated = new EventEmitter();

    private readonly defaultCenterPoint = { lat: 6.253945168040886, lng: -75.56713526708984 };
    private readonly defaultZoom = 18;

    private mapOptions: any;
    private locationValue;
    private addressValue;
    private searchBox: any;
    private overlays: any[] = [];
    

    @ViewChild('gmap')
    private gmap: GMap;

    constructor(
        private _toastrService: ToastrService
    ) {
        
    }

    ngOnInit(): void {
        let control: FormControl = new FormControl('', Validators.required);
        this.formGroup.addControl('Address', control);

        this.initGoogleMaps();
    }

    initGoogleMaps() {
        
        // Inicializamos el campo de busqueda
        this.searchBox = new google.maps.places.SearchBox(
            document.getElementById("pac-input")
        );

        // Definimos las opciones iniciales del mapa
        this.mapOptions = {
            center: this.defaultCenterPoint,
            zoom: this.defaultZoom,
            mapTypeId: "roadmap"
        };

        // En modo creacion siempre cargamos el mapa en la ubicacion central del usuario
        if(this.mode == ComponentMode.create) {
            this.getCurrentLatLngMap();
        }
    }

    addMarker(selectedPosition, map) {
        this.clearOverlays();
        this.overlays.push(
            new google.maps.Marker({
                position: selectedPosition
            })
        );

        if(map)
        {
            map.setCenter(selectedPosition);
            map.setZoom(this.defaultZoom);
        }
    }

    locateAddressInMap(map) {
        
        const self = this;
        
        self.searchBox.setBounds(map.getBounds());
        
        var places = self.searchBox.getPlaces();
        
        if (!places || places.length == 0) {
            self._toastrService.warning("No se puede encontrar la dirección ingresada", "");
            return;
        }

        places.forEach(function(place) {
            if (!place.geometry) {
                self._toastrService.warning("No se puede encontrar la dirección ingresada", "");
                return;
            }

            // asignamos a la propiedad de address el valor 
            // de la direccion para forzar la emision del evento.
            // Es necesario hacerlo con javascript ya que el componente
            // de busqueda de google maps no dispara el evento de angular
            // y no actualiza la propiedad que se encuentra en el binding
            self.address = (<HTMLInputElement>document.getElementById("pac-input")).value;

            self.location = { 
                latitude: place.geometry.location.lat(), 
                longitude: place.geometry.location.lng()
            };

            self.locationUpdated.emit(self.location);

        });
    }

    clearOverlays() {
      this.overlays.forEach((value, index) => {
        this.overlays[index].setMap(null);
      });
      this.overlays = [];
    }

    getCurrentLatLngMap() {
        this.getPosition().then(pos => {
            let map = this.gmap.getMap();
            map.setCenter(pos);
            map.setZoom(this.defaultZoom);
        }).catch(reason=>{
            console.log("Geolocalizacion rechazada");
            console.log(reason);
        });
    }

    getPosition(): Promise<any> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
            resp => {
                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
            },
            err => {
                reject(err);
            }
            );
        });
    }

    onMapReady(event) {
        // Si al inicializar el componente no esta listo el mapa:        
        if(this.mode == ComponentMode.create) {
            // Para la creacion centramos el mapa en la ubicacion 
            // mas cercana al usuario
            this.getCurrentLatLngMap();
        } else {
            // Para la edicion centramos el mapa en las coordenadas
            // almacenadas
            this.addMarker({lat: this.locationValue.latitude, lng: this.locationValue.longitude}, this.gmap.getMap());
        }
    }

    hasValidLatitudeAndLongitude() {
        let latitudeValid = this.formGroup.controls['Latitude'].valid;
        let longitudeValid = this.formGroup.controls['Length'].valid;
        let addressDirty = this.formGroup.controls['Address'].dirty;
        let addressTouched = this.formGroup.controls['Address'].touched;

        if ((addressDirty || addressTouched) && !latitudeValid && !longitudeValid) {
            return false;
        } else {
            return true;
        }
    }

    @Input()
    get location(): any {
        return this.locationValue;
    }

    set location(value: any) {

        if(value) {
            this.locationValue = value;
            // Cada vez que settean una nueva ubicacion agregamos un marcador
            this.addMarker({lat: this.locationValue.latitude, lng: this.locationValue.longitude}, this.gmap.getMap());
            this.locationChange.emit(this.locationValue);
        }
    }

    @Input()
    get address(): any {
        return this.addressValue;
    }

    set address(value: any) {
        this.addressValue = value;
        this.addressChange.emit(this.addressValue);
    }
}