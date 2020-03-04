import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {
// HEROE es lo que se va a manejar en cada tarjeta

//se inicializa variable heroe como obj vacio
// heroe: any = {};

//Input = le dice a Angular que una prod que quiero specificar sera recibida desde afuera
@Input() heroe: any = {};
//la propiedad HEROE puede venir desde afuera

@Input() index: number;

  constructor(private router:Router) { }

  ngOnInit() {
  }
//FUNCTION
verHeroe() {
  console.log(this.index);

  this.router.navigate(['/heroe', this.index]);
}
}
