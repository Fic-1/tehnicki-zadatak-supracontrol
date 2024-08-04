import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { KorisniciFormComponent } from './korisnici-form/korisnici-form.component';

const routes: Routes = [
  {
    path: '',
    component: KorisniciComponent,
  },
  {
    path: 'novi',
    component: KorisniciFormComponent,
  },
  { path: 'uredi/:id', component: KorisniciFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
