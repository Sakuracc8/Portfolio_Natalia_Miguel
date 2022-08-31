import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  img_proyecto: string = '';
  url_proyecto: string = '';

  constructor(private sProyectos: SProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyectos = new Proyectos(this.nombreE, this.descripcionE, this.img_proyecto,this.url_proyecto);
    this.sProyectos.save(proyectos).subscribe(data=>{
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }

}
