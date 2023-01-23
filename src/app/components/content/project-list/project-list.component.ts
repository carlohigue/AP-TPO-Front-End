import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/service.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent {


  LOGTRACK = {
   user: '',
   role: ''
  };

  gatheredProjects: any = [];

  metaProject: Project = new Project();
  addForm: any;
  editForm: any;
  editId: any;

  addFormModel = {
    title: '',
    tech: '',
    link: '',
  };

  editFormModel = {
    id: '',
    title: '',
    tech: '',
    link: '',
  };

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.listProjects();
    this.loginTracker()
  }

  listProjects() {
    this.projectService.allProjects().subscribe({
      next: (res) => (this.gatheredProjects = res),
      error: () =>
        window.alert(
          `There was an problem with LIST, please check your check you internet conection, reaload this page or contact the developer.`
        ),
    });
  }

  addProject(addForm: NgForm) {
    this.projectService.addProject(addForm.value).subscribe({
      next: () => window.alert(`Addition was successful!`),
      complete: () => this.ngOnInit(),
      error: () =>
        window.alert(
          `There was an problem with ADD, please check your check you internet conection, reaload this page or contact the developer.`
        ),
    });
    this.listProjects();
  }

  openInForm(project: any) {
    this.projectService.getProject(project.id).subscribe({
      next: (res) => (this.editFormModel = res),
      error: () =>
        window.alert(
          `There was an problem with GET, please check your check you internet conection, reaload this page, reaload this page or contact the developer.`
        ),
    });
  }

  editProject(editForm: NgForm) {
    let pEdit: Project = {
      id: editForm.value.id,
      title: editForm.value.title,
      tech: editForm.value.tech,
      link: editForm.value.link,
    };
    if (pEdit.id == 1 || pEdit.id == 2) {
      window.alert('You are not allowed to edit this project. Try using other');
    }

    this.projectService.editProject(pEdit.id, pEdit).subscribe({
      error: () =>
        window.alert(
          `There was an problem with EDIT, please check your conection or contact the developer`
        ),
      next: () => this.ngOnInit(),
    });
  }

  deleteProject() {
    let deleteId: any = prompt('Input the project ID to delete:');
    deleteId = parseInt(deleteId);

    if (deleteId == 1 || deleteId == 2) {
      return window.alert('You are not allowed to delete this project. Try using Other');
    }

    let failed: boolean = true;

    for (let gp of this.gatheredProjects) {
      if (deleteId == gp.id) {
        if (
          confirm(
            `You are going to delete the project with ID «${deleteId}». This is permanent. Press OK to proceed.`
          )
        ) {
          failed = false;

          this.projectService.deleteProject(deleteId).subscribe({
            next: () => window.alert('Deletion was submitted.'),
            error: () =>
              window.alert('There was an problem with DELETE, please check your conection or contact the developer.'),
            complete: () => this.listProjects()
          });
        }
      }
    }
    if (failed) {
      window.alert('No project was found using that ID.');
    }
  }

  loginTracker(): void{
    if(localStorage.getItem('user')){
     this.LOGTRACK = JSON.parse(localStorage.getItem('user')|| '{}');
    }
   }
}
