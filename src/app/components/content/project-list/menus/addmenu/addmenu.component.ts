import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProject } from 'src/app/model/project';
import { ProjectListComponent } from '../../project-list.component';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent {

  constructor (private projectListComponent: ProjectListComponent){}

  metaProject = this.projectListComponent.metaProject;
  project:IProject={
    link: '',
    title: '',
    tech: ''
  }
  addProject(f:NgForm){
    if(f.valid){
      this.projectListComponent.metaProject=f.value
    this.projectListComponent.addProject();
      this.projectListComponent.listProjects()
    }
  }

  hideAddMenu(){
    this.projectListComponent.hideAddMenu();
  }


  blankForm(): void{
    this.projectListComponent.blankForm();
  }
}
