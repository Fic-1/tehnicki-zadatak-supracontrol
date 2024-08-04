import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KorisniciService } from '../korisnici/korisnici.service';
import { Korisnik } from '../models/korisnik';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-korisnici-form',
  templateUrl: './korisnici-form.component.html',
  styleUrls: ['./korisnici-form.component.css'],
})
export class KorisniciFormComponent implements OnInit {
  formData: any;
  korisniciForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.korisniciForm = this.formBuilder.group({
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      spol: ['', Validators.required],
      email: ['', Validators.required],
      telefon: ['', [Validators.required]],
      korisnik: ['', Validators.required],
      administrator: [false],
      radnoMjesto: [''],
      drzava: [''],
      grad: [''],
      adresa: [''],
      biljeske: [''],
      korisnickoIme: ['', Validators.required],
      novaLozinka: [''],
      ponoviLozinku: [''],
    });

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      const korisnik = this.korisniciService.getOneKorisnik(id);

      if (korisnik) this.korisniciForm.patchValue(korisnik);
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private korisniciService: KorisniciService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  onSubmit() {
    if (!this.korisniciForm.valid) return;
    console.log(this.korisniciForm.valid);
    let korisnik: Korisnik = this.korisniciForm.value;
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      korisnik.id = id;
      this.korisniciService.updateKorisnik(id, korisnik);
    } else {
      this.korisniciService.addKorisnik(korisnik);
    }
  }
}
