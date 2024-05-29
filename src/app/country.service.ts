import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  private countryId: string = 'us';

  private currentCountry: any;
  private apiUrl = 'http://api.worldbank.org/v2/country/';

  getCountryData() {
    this.http
      .get(this.apiUrl + this.countryId + '?format=json')
      .subscribe((apiResponse: any) => {
        this.currentCountry = {
          name: apiResponse[1][0].name,
          capital: apiResponse[1][0].capitalCity,
          region: apiResponse[1][0].region.value,
          income_level: apiResponse[1][0].incomeLevel.value,
          latitude: apiResponse[1][0].latitude,
          longitude: apiResponse[1][0].longitude,
        };
      });
  }

  setCountryId(countryid: string) {
    this.countryId = countryid;
  }

  getCurrentCountry() {
    this.getCountryData();
    console.log('this was called');
    return this.currentCountry;
  }
}
