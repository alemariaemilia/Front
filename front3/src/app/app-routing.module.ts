import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditeducacionComponent } from "./components/educacion/editeducacion.component";
import { NeweducacionComponent } from "./components/educacion/neweducacion.component";
import { EditExperienciaComponent } from "./components/experiencia/editexperiencia.component";
import { NewExperienciaComponent } from "./components/experiencia/newexperiencia.component";
import { HomeComponent } from "./components/home/home.component";
import { EditskillComponent } from "./components/hys/editskill.component";
import { NewskillComponent } from "./components/hys/newskill.component";
import { LoginComponent } from "./components/login/login.component";
import { EditproyectoComponent } from "./components/proyecto/editproyecto.component";
import { NewproyectoComponent } from "./components/proyecto/newproyecto.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'newedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'newskill', component: NewskillComponent},
  { path: 'editskill/:id', component: EditskillComponent},
  { path: 'newproyecto', component: NewproyectoComponent},
  { path: 'editproyecto/:id', component: EditproyectoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
