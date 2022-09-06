import { Component, OnInit } from '@angular/core';
import { AcercaDeM } from 'src/app/model/acerca-de-m';
import { AcercaDeService } from 'src/app/service/acerca-de.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  acercade: AcercaDeM[] = [];
  
  constructor(private sAcercade: AcercaDeService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarAcercade();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarAcercade(): void{
    this.sAcercade.lista().subscribe(data => {this.acercade = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sAcercade.delete(id).subscribe(
        data => {
          this.cargarAcercade();
        }, err => {
          alert("No se pudo borrar Acerca de");
        }
      )
    }
  }
  }
