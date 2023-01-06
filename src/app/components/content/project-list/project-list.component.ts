import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/service.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

  gatheredProjects:any=[];
  metaProject: Project= new Project;


  constructor(private projectService: ProjectService, private router: Router){}

  ngOnInit(): void {
    this.listProjects();
  }

  listProjects(){
    this.projectService.allProjects().subscribe((w) => this.gatheredProjects= w)

  }

  addProject(){
    location.reload();
    this.projectService.addProject(this.metaProject).subscribe({
      next: (w)=> console.log(w),
      complete: () => this.router.navigate(['/'])
    })
  }

  editProject(id: any){
    location.reload();
    this.projectService.editProject(id, this.metaProject).subscribe();
  }

  deleteProject(){
    let deleteId: any = prompt("Input the project ID to delete:")
    deleteId = parseInt(deleteId);

    let failed: boolean = true;

    for(let gp of this.gatheredProjects){
      if( deleteId == gp.id){
        if(confirm(`You are going to delete the project with ID « ${deleteId} ». Press OK to proceed.`)){
          failed = false
          window.alert('Deletion was successful.');
          location.reload();
          this.projectService.deleteProject(deleteId).subscribe(() => {
            return this.ngOnInit();
          })
        }
      }
    }
    if(failed){
      window.alert('No project was found using that ID.')
    }
  }

  blankForm(){
    this.metaProject = new Project;
  }

  showMainMenu(){
    let mainMenu: any = document.querySelector('[id="hiddenMainMenu"]');
    mainMenu.className = 'not-hide'
  }

  hideMainMenu(){
    let mainMenu: any = document.querySelector('[id="hiddenMainMenu"]');
    mainMenu.className = 'hide'
  }

  ShowAddMenu(){
    let menuAdd: any = document.querySelector('[id="hiddenAddMenu"]');
    menuAdd.className = 'not-hide';
    let list: any = document.querySelector('[id="projects-table"]');
    list.className = 'hide';

  }

  hideAddMenu(){
    let menu: any = document.querySelector('[id="hiddenAddMenu"]');
    menu.className = 'hide'
    let list: any = document.querySelector('[id="projects-table"]');
    list.className = 'not-hide';
  }

  ShowEditMenu(){
    let menuEdit: any = document.querySelector('[id="hiddenEditMenu"]');
    menuEdit.className = 'not-hide'
    window.alert('Choose from the list the project you want to edit.')

  }

  hideEditMenu(){
    let menu: any = document.querySelector('[id="hiddenEditMenu"]');
    menu.className = 'hide'
  }

  openInForm(project: Project){
    this.metaProject = project;
  }



}

