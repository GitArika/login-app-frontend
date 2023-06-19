import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LoginFormComponent } from './viewchild/login-form/login-form.component';
import { AdvertisingModule } from 'src/app/components/advertising/advertising.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [CommonModule, AdvertisingModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoginService],
})
export class LoginModule {}
