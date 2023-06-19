import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';
import { AdvertisingModule } from '../../components/advertising/advertising.module';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
  },
];

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, AdvertisingModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupModule {}
