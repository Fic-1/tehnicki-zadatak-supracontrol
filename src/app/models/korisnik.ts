export interface Korisnik {
  id: string;
  ime: string;
  prezime: string;
  email: string;
  telefon: string;
  radnoMjesto: string;
  drzava: string;
  grad: string;
  datumIzrade: Date;
  korisnik: boolean;
  administrator: boolean;
  role: string[];
}
