import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercadeComponent } from './components/acerca-de/edit-acercade/edit-acercade.component';
import { EditeducacionComponent } from './components/educacion/editeducacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos/edit-proyectos.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';
import { NewAcercadeComponent } from './components/acerca-de/new-acercade/new-acercade.component';
import { NewSkillsComponent } from './components/skills/new-skills/new-skills.component';
import { EditSkillsComponent } from './components/skills/edit-skills/edit-skills.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'edit-acercade/:id', component: EditAcercadeComponent},
  {path: 'nuevoproyecto', component: NewProyectoComponent},
  {path: 'editproyectos/:id', component: EditProyectosComponent},
  {path: 'nuevo-acercade', component: NewAcercadeComponent},
  {path: 'nueva-habilidad', component: NewSkillsComponent},
  {path: 'editskills/:id', component: EditSkillsComponent},
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
