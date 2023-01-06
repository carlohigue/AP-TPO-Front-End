import { Component } from '@angular/core';
import { ProjectListComponent } from '../../project-list.component';

@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.css']
})
export class EditmenuComponent {

  constructor (private projectListComponent: ProjectListComponent){}


  metaProject = this.projectListComponent.metaProject;

  blankForm(): void{
    this.projectListComponent.blankForm();
  }

  hideEditMenu(){
    this.projectListComponent.hideEditMenu();
  }


  editProject(id: any){
    this.projectListComponent.editProject(id);
  }
}
