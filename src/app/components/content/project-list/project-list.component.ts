import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/service.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent {
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

  gatheredProjects: any = [];
  metaProject: Project = new Project();
  addForm: any;
  editForm: any;
  editId: any;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.listProjects();
  }

  listProjects() {
    this.projectService.allProjects().subscribe({
      next: (res) => (this.gatheredProjects = res),
      error: () =>
        window.alert(
          `There was an problem with LIST, please check your check you internet conection or contact the developer.`
        ),
    });
  }

  addProject(addForm: NgForm) {
    this.projectService.addProject(addForm.value).subscribe({
      next: () => window.alert(`Addition was successful!`),
      complete: () => this.ngOnInit(),
      error: () =>
        window.alert(`There was an problem with ADD, please check your check you internet conection or contact the developer.`
        ),
    });
    this.listProjects();
  }

  openInForm(project: any) {
    this.projectService.getProject(project.id).subscribe({
      next: (res) => (this.editFormModel = res),
      error: () =>
        window.alert(`There was an problem with GET, please check your check you internet conection or contact the developer.`
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
    this.projectService
      .editProject(pEdit.id, pEdit)
      .subscribe({
        error: () => window.alert(`There was an problem with EDIT, please check your conection or contact the developer`),
        next: () => this.ngOnInit()
      });
  }

  deleteProject() {
    let deleteId: any = prompt('Input the project ID to delete:');
    deleteId = parseInt(deleteId);

    let failed: boolean = true;

    for (let gp of this.gatheredProjects) {
      if (deleteId == gp.id) {
        if (confirm(`You are going to delete the project with ID «${deleteId}». This is permanent. Press OK to proceed.`)){
          failed = false;

          this.projectService
            .deleteProject(deleteId)
            .subscribe({
              next:()=> window.alert('Deletion was submitted.'),
              error: () => window.alert("There was an problem with DELETE, please check your conection or contact the developer."),
              complete: () => this.listProjects()
            });
        }
      }
    }
    if (failed) {
      window.alert('No project was found using that ID.');
    }
  }
}
