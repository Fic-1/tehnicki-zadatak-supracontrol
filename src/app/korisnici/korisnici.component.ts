import { Component } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { KorisniciService } from './korisnici.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css'],
})
export class KorisniciComponent {
  korisnici: Korisnik[] = [];
  buttonDisabled: boolean;
  showSearch: boolean;
  odabraniKorsinik: Korisnik | undefined;

  constructor(
    private korisniciService: KorisniciService,
    private router: Router
  ) {
    this.korisnici = this.korisniciService.getKorisnici();
    console.log(this.korisnici);

    this.buttonDisabled = true;
    this.showSearch = false;
  }

  onSelectionChanged(e: any) {
    this.buttonDisabled = e.selectedRowsData.length === 0;
    this.odabraniKorsinik = e.selectedRowsData[0];
  }

  onSearchClick() {
    this.showSearch = !this.showSearch;
  }

  onButtonClick() {
    this.router.navigate([`/uredi/${this.odabraniKorsinik?.id}`]);
  }

  izbrisiKorisnika() {
    if (!this.odabraniKorsinik) return;
    this.korisniciService.deleteKorisnik(this.odabraniKorsinik.id);
  }
}
