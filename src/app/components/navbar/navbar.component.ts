import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginUser } from 'src/app/model/login-user';
import { ProjectService } from 'src/app/service/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {


  loginForm;


  constructor(private projectService: ProjectService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      user: '',
      password: '',
    });
  }

  ngOnInit(): void {
    this.loginTracker()
  }

  LOGTRACK = {
    userId: '',
    role: '',
  };


  attemptLogin(user: any) {

    let userSend = {
      userId: user.user,
      password: user.password
    }

    this.projectService.loginAuth(userSend).subscribe({
      next: (res) =>  (localStorage.setItem('user', JSON.stringify(res))),
      error: () => (window.alert('Wrong credentials, try again.')),
      complete: () => (location.reload())
    })
  }

  logout() {
    localStorage.removeItem('user');
    return location.reload();
  }

  loginTracker(): void{
    if(localStorage.getItem('user')){
     this.LOGTRACK = JSON.parse(localStorage.getItem('user')|| '');
    }
   }
}
