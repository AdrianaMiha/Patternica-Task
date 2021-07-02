import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SupermarketComponent } from './supermarket/supermarket.component';
import { PhotoLibraryComponent } from './photo-library/photo-library.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WelcomePageComponent },
  { path: 'supermarket', component: SupermarketComponent },
  { path: 'photos', component: PhotoLibraryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
