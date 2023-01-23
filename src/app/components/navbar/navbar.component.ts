import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginUser } from 'src/app/model/login-user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {


  loginForm;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      user: '',
      password: '',
    });
  }

  ngOnInit(): void {
    this.loginTracker()
  }

  LOGTRACK = {
    user: '',
    role: '',
  };

  availableUsers: LoginUser[] = [
    {
      user: 'username',
      password: 'userpass',
      role: 'user',
    },
    {
      user: 'theadmin',
      password: 'admin*123',
      role: 'admin',
    },
    {
      user: 'thevisitor',
      password: 'heretosee',
      role: 'user',
    },
  ];

  test() {
    window.alert('Event works');
  }

  attemptLogin(user: any) {
    for (let a of this.availableUsers) {
      if (user.user == a.user && user.password == a.password) {
        window.alert('Login successful!');
        const logUser = {
          user: a.user,
          role: a.role,
        };
        localStorage.setItem('user', JSON.stringify(logUser));
        return location.reload();
      }
    }
    return window.alert('Wrong credentials, check password or user.');
  }

  logout() {
    localStorage.removeItem('user');
    return location.reload();
  }

  loginTracker(): void{
    if(localStorage.getItem('user')){
     this.LOGTRACK = JSON.parse(localStorage.getItem('user')|| '{}');
    }
   }
}
