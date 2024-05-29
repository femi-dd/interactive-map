import { HttpClient } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  // Initializes the countryService to be used for api calls and data transfer
  // Initializes the inbuild httpClient which allows api calles to be made
  constructor(
    private countryService: CountryService,
    private http: HttpClient
  ) {}

  /*
  when the component is initialized, add an event listener to all the country paths
  with a call service that calls the api
  */
  ngOnInit() {
    let countries = document.getElementsByTagName('path');
    for (let i = 0; i < countries.length; i++) {
      let tagId: any = countries[i].getAttribute('id');
      countries[i].addEventListener('click', () => {
        this.countryService.callApi(tagId).subscribe((apiResponse: any) => {
          this.countryService.updateCountry({
            id: apiResponse[1][0].id,
            name: apiResponse[1][0].name,
            capital: apiResponse[1][0].capitalCity,
            region: apiResponse[1][0].region.value,
            income_level: apiResponse[1][0].incomeLevel.value,
            latitude: apiResponse[1][0].latitude,
            longitude: apiResponse[1][0].longitude,
          });
        });
      });
    }
  }
}
