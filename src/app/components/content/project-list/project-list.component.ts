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
    this.projectService
      .allProjects()
      .subscribe((res) => (this.gatheredProjects = res));
  }

  addProject(addForm: NgForm) {
    this.projectService.addProject(addForm.value).subscribe({
      next: () => window.alert(`Addition was successful!`),
      complete: () => this.ngOnInit()
    });
    this.listProjects();
  }

  openInForm(project: any) {
    this.projectService
      .getProject(project.id)
      .subscribe((res) => (this.editFormModel = res));
  }

  editProject(editForm: NgForm) {
    let pEdit: Project = {
      id: editForm.value.id,
      title: editForm.value.title,
      tech: editForm.value.tech,
      link: editForm.value.link,
    };
    this.projectService.editProject(pEdit.id, pEdit).subscribe(() => this.ngOnInit());
  }


  deleteProject() {
    let deleteId: any = prompt('Input the project ID to delete:');
    deleteId = parseInt(deleteId);

    let failed: boolean = true;

    for (let gp of this.gatheredProjects) {
      if (deleteId == gp.id) {
        if (
          confirm(
            `You are going to delete the project with ID « ${deleteId} ». Press OK to proceed.`
          )
        ) {
          failed = false;
          window.alert('Deletion was submitted.');
          this.projectService.deleteProject(deleteId).subscribe(() => this.ngOnInit());
        }
      }
    }
    if (failed) {
      window.alert('No project was found using that ID.');
    }
  }
}
