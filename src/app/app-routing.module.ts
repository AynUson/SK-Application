import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkActivitiesViewComponent } from './sk-activities-view/sk-activities-view.component';

import { SkDashboardComponent } from './sk-dashboard/sk-dashboard.component';
import { SkEventsViewComponent } from './sk-events-view/sk-events-view.component';
import { SkKabataansViewComponent } from './sk-kabataans-view/sk-kabataans-view.component';
import { SkPositionComponent } from './sk-position/sk-position.component';
import { SkProjectsViewComponent } from './sk-projects-view/sk-projects-view.component';
import { SkProjectsComponent } from './sk-projects/sk-projects.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sk-dashboard',
    pathMatch: 'full'
  },
  {
    path: 'sk-dashboard', 
    component: SkDashboardComponent
  },
  {
  path: 'sk-dashboard', 
  component: SkProjectsComponent
  },
  {
    path: 'sk-projects-view', 
    component: SkProjectsViewComponent
  },
  {
    path: 'sk-events-view', 
    component: SkEventsViewComponent
  },
  {
    path: 'sk-activities-view', 
    component: SkActivitiesViewComponent
  },
  {
    path: 'sk-kabataans-view',
    component: SkKabataansViewComponent
  },
  {
    path: 'sk-positions',
    component: SkPositionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
