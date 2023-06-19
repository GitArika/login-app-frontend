import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  private login: string = 'login';
  constructor(private route: ActivatedRoute, private router: Router) {}

  navigate(): void {
    this.router.navigate([this.login]);
  }
}
