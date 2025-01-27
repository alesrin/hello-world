import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent  implements OnInit {
  usuario= this.fb.group({
    email:['' , [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  })


  constructor(private fb: FormBuilder, private auth: AuthService,public alertCtrl: AlertController,private router: Router) { }

  ngOnInit() {}
  login() {
    const email = this.usuario.get('email')?.value ?? '';
    const password = this.usuario.get('password')?.value ?? '';

    this.auth.loginUser(email, password).then(result => {
      this.router.navigate(['/tabs']);
    }).catch(err => {
      this.alertCtrl.create({
        header: 'Error',
        subHeader: err.message,
        buttons: ['Aceptar']
      }).then(alert => alert.present());
    });
  }

  signin() {
    const email = this.usuario.get('email')?.value ?? '';
    const password = this.usuario.get('password')?.value ?? '';

    this.auth.registerUser(email, password).then(result => {
      this.router.navigate(['/tabs']);
    }).catch(err => {
      this.alertCtrl.create({
        header: 'Error',
        subHeader: err.message,
        buttons: ['Aceptar']
      }).then(alert => alert.present());
    });
  }



}
