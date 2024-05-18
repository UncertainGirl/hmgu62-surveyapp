import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email = new FormControl('');
  password = new FormControl('');

  loading: boolean = false;

  constructor(private router: Router, private loadingService: FakeLoadingService, private authService: AuthService ){}

  login(){
    this.loading = true;/*
    if(this.email.value !== null && this.password.value !== null){
      this.loadingService.loadingWithPromise(this.email.value, this.password.value).then((_: boolean) => {
        this.router.navigateByUrl('/main');
      }).catch(error => {
        console.error(error, 'Incorrect email or password!');
        this.loading = false;
      }).finally(() => {
        console.log('This is executed finally.');
        this.loading = false;
      });
    }*/

    this.authService.login(this.email.value as string, this.password.value as string).then(cred => {
      console.log(cred);
        this.router.navigateByUrl('/main');
        this.loading = false;
      }).catch(error => {
        console.error(error);
        this.loading = false;
    });
  }
}
