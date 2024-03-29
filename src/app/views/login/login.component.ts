import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private signup: string = 'signup';
  constructor(private route: ActivatedRoute, private router: Router) {}

  navigate(): void {
    this.router.navigate([this.signup]);
  }
}
