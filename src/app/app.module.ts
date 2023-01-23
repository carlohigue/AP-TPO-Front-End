import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './components/content/info/info.component';
import { ProjectListComponent } from './components/content/project-list/project-list.component';
import { AccordionComponent } from './components/content/info/accordion/accordion.component';
import { WhoiamComponent } from './components/content/info/accordion/whoiam/whoiam.component';
import { ExperienceComponent } from './components/content/info/accordion/experience/experience.component';
import { StudiesComponent } from './components/content/info/accordion/studies/studies.component';
import { AbilitiesComponent } from './components/content/info/accordion/abilities/abilities.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    InfoComponent,
    ProjectListComponent,
    AccordionComponent,
    WhoiamComponent,
    ExperienceComponent,
    StudiesComponent,
    AbilitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
