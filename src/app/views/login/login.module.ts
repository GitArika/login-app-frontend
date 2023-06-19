import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AdvertisingComponent } from './viewchild/advertising/advertising.component';
import { LoginFormComponent } from './viewchild/login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [AdvertisingComponent, LoginComponent, LoginFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [LoginService],
})
export class LoginModule {}
