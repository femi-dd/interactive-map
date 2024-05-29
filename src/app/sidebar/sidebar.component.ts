import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private countryService: CountryService) {}

  country: any;

  ngOnInit() {
    this.countryService.getCurrentCountry().subscribe((data) => {
      this.country = data;
    });
  }
}
