import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkDashboardComponent } from './sk-dashboard/sk-dashboard.component';
import { SkProjectsComponent } from './sk-projects/sk-projects.component';
import { SkProjectsViewComponent } from './sk-projects-view/sk-projects-view.component';
import { SkEventsViewComponent } from './sk-events-view/sk-events-view.component';
import { SkActivitiesViewComponent } from './sk-activities-view/sk-activities-view.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule  } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule  } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatNativeDateModule } from '@angular/material/core'
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { SkKabataansViewComponent } from './sk-kabataans-view/sk-kabataans-view.component';
import { SkPositionComponent } from './sk-position/sk-position.component';
import { KabataanInfoComponent } from './kabataan-info/kabataan-info.component';
import { AddSkComponent } from './add-sk/add-sk.component';
import { AddSkViewComponent } from './add-sk-view/add-sk-view.component';



@NgModule({
  declarations: [
    AppComponent,
    SkDashboardComponent,
    SkProjectsComponent,
    SkProjectsViewComponent,
    SkEventsViewComponent,
    SkActivitiesViewComponent,
    SkKabataansViewComponent,
    SkPositionComponent,
    KabataanInfoComponent,
    AddSkComponent,
    AddSkViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatDividerModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatFormFieldModule, 
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
