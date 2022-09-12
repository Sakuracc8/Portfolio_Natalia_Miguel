import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acercade } from 'src/app/model/acercade';
import { SAcercadeService } from 'src/app/service/s-acercade.service';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {
  acercade: Acercade = null;

  constructor(private acercadeS: SAcercadeService, private activatedRouter : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.acercadeS.detail(id).subscribe(
      data =>{
        this.acercade = data;
      }, err =>{
         alert("Error al modificar acerca de");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.acercadeS.update(id, this.acercade).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar acerca de");
        this.router.navigate(['']);
      }
    )
  }
}
