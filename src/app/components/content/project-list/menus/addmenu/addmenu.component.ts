import { Component } from '@angular/core';
import { ProjectListComponent } from '../../project-list.component';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent {

  constructor (private projectListComponent: ProjectListComponent){}

  metaProject = this.projectListComponent.metaProject;

  addProject(){
    this.projectListComponent.addProject();
  }

  hideAddMenu(){
    this.projectListComponent.hideAddMenu();
  }


  blankForm(): void{
    this.projectListComponent.blankForm();
  }
}
