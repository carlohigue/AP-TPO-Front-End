import { Component } from '@angular/core';
import { ProjectListComponent } from '../project-list.component';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent {


  constructor (private projectListComponent: ProjectListComponent){}

  hideMainMenu(){
    this.projectListComponent.hideMainMenu();
  }

  ShowAddMenu(){
    this.projectListComponent.ShowAddMenu();
  }

  hideAddMenu(){
    this.projectListComponent.hideAddMenu();
  }

  ShowEditMenu(){
    this.projectListComponent.ShowEditMenu();
  }

  hideEditMenu(){
    this.projectListComponent.hideEditMenu();
  }

  blankForm(): void{
    this.projectListComponent.blankForm();
  }
}
