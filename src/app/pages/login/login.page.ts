import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    console.log('login form email: ', form.value.email);
    console.log('login form senha: ', form.value.senha);
    this.authService.login(form.value.email, form.value.senha)
      .then(
        (result: any) => {
          console.log('login ok redirect');
          this.navCtrl.navigateRoot('/logged');
        })
      .catch((error: any) => {
          console.log('login fail redirect');
          this.navCtrl.navigateRoot('/logout');
        });
  }
}
