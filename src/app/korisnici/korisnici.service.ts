import { Injectable } from '@angular/core';
import { Korisnik } from '../models/korisnik';

@Injectable({
  providedIn: 'root',
})
export class KorisniciService {
  private korisnici: Korisnik[] = [
    {
      id: '1a2b3c4d',
      ime: 'Marko',
      prezime: 'Maric',
      email: 'marko.maric@example.com',
      telefon: '+385912345678',
      korisnik: true,
      administrator: true,
      radnoMjesto: 'IT Menadžer',
      drzava: 'Hrvatska',
      grad: 'Zagreb',
      datumIzrade: new Date('2023-01-15'),
      role: ['Korisnik', 'Administrator'],
    },
    {
      id: '2b3c4d5e',
      ime: 'Ivana',
      prezime: 'Ivic',
      email: 'ivana.ivic@example.com',
      telefon: '+385923456789',
      korisnik: true,
      administrator: false,
      radnoMjesto: 'Prodajni predstavnik',
      drzava: 'Hrvatska',
      grad: 'Split',
      datumIzrade: new Date('2023-02-20'),
      role: ['Korisnik'],
    },
    {
      id: '3c4d5e6f',
      ime: 'Petar',
      prezime: 'Petrovic',
      email: 'petar.petrovic@example.com',
      telefon: '+385934567890',
      korisnik: true,
      administrator: false,
      radnoMjesto: 'Tehnička podrška',
      drzava: 'Hrvatska',
      grad: 'Rijeka',
      datumIzrade: new Date('2023-03-10'),
      role: ['Korisnik'],
    },
    {
      id: '4d5e6f7g',
      ime: 'Ana',
      prezime: 'Anic',
      email: 'ana.anic@example.com',
      telefon: '+385945678901',
      korisnik: true,
      administrator: false,
      radnoMjesto: 'Financijski analitičar',
      drzava: 'Hrvatska',
      grad: 'Osijek',
      datumIzrade: new Date('2023-04-25'),
      role: ['Korisnik'],
    },
    {
      id: '5e6f7g8h',
      ime: 'Marija',
      prezime: 'Marić',
      email: 'marija.maric@example.com',
      telefon: '+385956789012',
      korisnik: true,
      administrator: false,
      radnoMjesto: 'HR Menadžer',
      drzava: 'Hrvatska',
      grad: 'Dubrovnik',
      datumIzrade: new Date('2023-05-30'),
      role: ['Korisnik'],
    },
  ];

  constructor() {
    // {
    //   let savedKorisnici = localStorage.getItem('korisnici');
    //   this.korisnici = savedKorisnici ? JSON.parse(savedKorisnici) : [];
    // }
  }

  getKorisnici() {
    return this.korisnici;
  }

  getOneKorisnik(id: string): Korisnik | undefined {
    return this.korisnici.find((res) => res.id === id);
  }

  addKorisnik(korisnik: Korisnik): void {
    korisnik.id = Date.now().toString();
    korisnik.role = [];
    if (korisnik.administrator) korisnik.role.push('Administrator');
    if (korisnik.korisnik) korisnik.role.push('Korisnik');
    if (!korisnik.korisnik && !korisnik.administrator) return;
    this.korisnici.push(korisnik);
  }

  deleteKorisnik(id: string): void {
    let index = this.korisnici.findIndex((res) => res.id === id);
    this.korisnici.splice(index, 1);
  }

  updateKorisnik(id: string, updatedKorisnik: Korisnik): void {
    let index = this.korisnici.findIndex((res) => res.id === id);
    updatedKorisnik.role = [];
    if (updatedKorisnik.administrator)
      updatedKorisnik.role.push('Administrator');
    if (updatedKorisnik.korisnik) updatedKorisnik.role.push('Korisnik');
    if (!updatedKorisnik.korisnik && !updatedKorisnik.administrator) return;
    this.korisnici[index] = updatedKorisnik;
  }
}
