import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  // creates a behaviorSubject which the sidebar component can subscribe to in the event of a data change
  // when the user clicks a new country
  private currentCountry = new BehaviorSubject<any>({});

  // updates the country Subject with new data from the api
  // this functions is called by the mapcomponent that triggers the api call
  updateCountry(country: any) {
    this.currentCountry.next(country);
  }

  // returns the new data from the country Subject
  // this function is called by the sidebar component and used to populate its fields
  getCurrentCountry() {
    return this.currentCountry;
  }

  // access the world bank api using the passed path(country) ID
  callApi(countryId: string) {
    return this.http.get(
      'http://api.worldbank.org/v2/country/' + countryId + '?format=json'
    );
  }
}
