import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
import { AcercaDeM } from 'src/app/model/acerca-de-m';
import { AcercaDeService } from 'src/app/service/acerca-de.service';

@Component({
  selector: 'app-new-acercade',
  templateUrl: './new-acercade.component.html',
  styleUrls: ['./new-acercade.component.css']
})
export class NewAcercadeComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  titulo: string = '';
  url_img: string = '';

  constructor(private sAcercade: AcercaDeService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const acercade = new AcercaDeM(this.nombreE, this.descripcionE, this.titulo, this.url_img);
    this.sAcercade.save(acercade).subscribe(data=>{
      alert("Acerca de añadido");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }


}
