import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KorisniciComponent } from './korisnici.component';
import { RouterModule } from '@angular/router';
import { KorisniciFormComponent } from '../korisnici-form/korisnici-form.component';
import {
  DxButtonModule,
  DxBoxModule,
  DxDataGridModule,
  DxFormModule,
  DxCheckBoxModule,
} from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [KorisniciComponent, KorisniciFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    DxButtonModule,
    DxDataGridModule,
    DxBoxModule,
    DxFormModule,
    FormsModule,
    ReactiveFormsModule,
    DxCheckBoxModule,
  ],
  exports: [KorisniciComponent],
})
export class KorisniciModule {}
