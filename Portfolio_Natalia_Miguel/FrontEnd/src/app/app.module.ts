import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { MenuComponent } from './components/menu/menu.component';
import { BotonIniciarSesionComponent } from './components/boton-ingresar-sesion/boton-iniciar-sesion.component';
import { BannerComponent } from './components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion/editeducacion.component';
import { EditAcercadeComponent } from './components/acerca-de/edit-acercade/edit-acercade.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos/edit-proyectos.component';
import { NewAcercadeComponent } from './components/acerca-de/new-acercade/new-acercade.component';
import { NewSkillsComponent } from './components/skills/new-skills/new-skills.component';
import { EditSkillsComponent } from './components/skills/edit-skills/edit-skills.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    SkillsComponent,
    FooterComponent,
    LogoAPComponent,
    MenuComponent,
    BotonIniciarSesionComponent,
    BannerComponent,
    HomeComponent,
    LoginComponent,
    FormularioLoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditAcercadeComponent,
    NewProyectoComponent,
    EditProyectosComponent,
    NewAcercadeComponent,
    NewSkillsComponent,
    EditSkillsComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
