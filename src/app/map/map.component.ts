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
  // starts of setting the event listeners for every country and the neccessary data to use for  API calls

  constructor(private apiService: CountryService) {}

  test = 'vjfnvfs';

  /*
  when the component is initialized, add an event listener to all the country paths
  with a call service that calls the api
  */
  ngOnInit() {
    let countries = document.getElementsByTagName('path');
    for (let i = 0; i < countries.length; i++) {
      let tagId: any = countries[i].getAttribute('id');
      countries[i].addEventListener('click', () => {
        this.apiService.setCountryId(tagId);
      });
    }
  }
}
