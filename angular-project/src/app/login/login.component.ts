import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  private username: string;
  private password: string;

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    this.username = e.target.elements[0].value;
    this.password = e.target.elements[1].value;

    if (this.username === 'admin' && this.password === 'admin') {

      this.user.setUserLoggedIn();
      this.router.navigate(['']);

    }
  }

}
