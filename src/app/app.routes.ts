import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
  {
    path: 'map',
    component: MapComponent,
    data: { title: 'Map - Page' },
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
  },
  { path: '', redirectTo: '/map', pathMatch: 'full' },
];
