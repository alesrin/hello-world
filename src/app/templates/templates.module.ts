import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { LoginComponent } from './login/login.component';
import { IonicModule} from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [RegisterComponent, AjustesComponent, LoginComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    RegisterComponent, AjustesComponent, LoginComponent]
})
export class TemplatesModule { }
