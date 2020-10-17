import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ActivityAddComponent } from './activity-add/activity-add.component';
import { ActivityViewComponent } from './activity-view/activity-view.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ImageAddComponent } from './image-add/image-add.component';
import { ImageEditComponent } from './image-edit/image-edit.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { LocationTypeAddComponent } from './location-type-add/location-type-add.component';
import { LocationTypeViewComponent } from './location-type-view/location-type-view.component';
import { LocationTypeEditComponent } from './location-type-edit/location-type-edit.component';
import { AnnouncementViewComponent } from './announcement-view/announcement-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { AnnouncementAddComponent } from './announcement-add/announcement-add.component';
import { AnnouncementEditComponent } from './announcement-edit/announcement-edit.component';
import { UpcomingEventViewComponent } from './upcoming-event-view/upcoming-event-view.component';
import { UpcomingEventAddComponent } from './upcoming-event-add/upcoming-event-add.component';
import { UpcomingEventEditComponent } from './upcoming-event-edit/upcoming-event-edit.component';
import { LocationViewComponent } from './location-view/location-view.component';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { LocationAddComponent } from './location-add/location-add.component';
import { LogisticsViewComponent } from './logistics-view/logistics-view.component';
import { LogisticsAddComponent } from './logistics-add/logistics-add.component';
import { LogisticsEditComponent } from './logistics-edit/logistics-edit.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SignHeaderComponent } from './sign-header/sign-header.component';
import { SignFooterComponent } from './sign-footer/sign-footer.component';
import { SignViewComponent } from './sign-view/sign-view.component';
import { MarqueeViewComponent } from './marquee-view/marquee-view.component';
import { ScheduleViewComponent } from './schedule-view/schedule-view.component';
import { ScheduleAddComponent } from './schedule-add/schedule-add.component';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';
import { ScriptureViewComponent } from './scripture-view/scripture-view.component';
import { ScriptureAddComponent } from './scripture-add/scripture-add.component';
import { ScriptureEditComponent } from './scripture-edit/scripture-edit.component';
import { ScripturesViewComponent } from './scriptures-view/scriptures-view.component';

 export const routes: Routes = [
  { path: '', component: HomeViewComponent, pathMatch: 'full' },
  { path: 'viewActivities', component: ActivityViewComponent },
  { path: 'addActivity', component: ActivityAddComponent },
  { path: 'editActivity/:id', component: ActivityEditComponent },
  { path: 'viewContacts', component: ContactViewComponent },
  { path: 'addContact', component: ContactAddComponent },
  { path: 'editContact/:id', component: ContactEditComponent },
  { path: 'viewImages', component: ImageViewComponent },
  { path: 'addImage', component: ImageAddComponent },
  { path: 'editImage/:id', component: ImageEditComponent },
  { path: 'viewLocationTypes', component: LocationTypeViewComponent },
  { path: 'addLocationType', component: LocationTypeAddComponent },
  { path: 'editLocationType/:id', component: LocationTypeEditComponent },
  { path: 'viewLocations', component: LocationViewComponent },
  { path: 'addLocation', component: LocationAddComponent },
  { path: 'editLocation/:id', component: LocationEditComponent },
  { path: 'viewHome', component: HomeViewComponent },
  { path: 'viewAnnouncements', component: AnnouncementViewComponent },
  { path: 'addAnnouncement', component: AnnouncementAddComponent },
  { path: 'editAnnouncement/:id', component: AnnouncementEditComponent },
  { path: 'viewUpcomingEvents', component: UpcomingEventViewComponent },
  { path: 'addUpcomingEvent', component: UpcomingEventAddComponent },
  { path: 'editUpcomingEvent/:id', component: UpcomingEventEditComponent },
  { path: 'viewLogistics', component: LogisticsViewComponent },
  { path: 'addLogistics', component: LogisticsAddComponent },
  { path: 'editLogistics/:id', component: LogisticsEditComponent },
  { path: 'viewSign', component: SignViewComponent },
  { path: 'viewSchedule', component: ScheduleViewComponent },
  { path: 'addSchedule', component: ScheduleAddComponent },
  { path: 'editSchedule/:id', component: ScheduleEditComponent },
  { path: 'viewScriptures', component: ScripturesViewComponent },
  { path: 'viewScripture', component: ScriptureViewComponent },
  { path: 'addScripture', component: ScriptureAddComponent },
  { path: 'editScripture/:id', component: ScriptureEditComponent },

]; 

@NgModule({
  declarations: [
    AppComponent,
    ActivityAddComponent,
    ActivityViewComponent,
    ActivityEditComponent,
    ContactViewComponent,
    ContactAddComponent,
    ContactEditComponent,
    ImageAddComponent,
    ImageEditComponent,
    ImageViewComponent,
    LocationTypeAddComponent,
    LocationTypeViewComponent,
    LocationTypeEditComponent,
    AnnouncementViewComponent,
    HomeViewComponent,
    AnnouncementAddComponent,
    AnnouncementEditComponent,
    UpcomingEventViewComponent,
    UpcomingEventAddComponent,
    UpcomingEventEditComponent,
    LocationViewComponent,
    LocationEditComponent,
    LocationAddComponent,
    LogisticsViewComponent,
    LogisticsAddComponent,
    LogisticsEditComponent,
    FooterComponent,
    HeaderComponent,
    SignHeaderComponent,
    SignFooterComponent,
    SignViewComponent,
    MarqueeViewComponent,
    ScheduleViewComponent,
    ScheduleAddComponent,
    ScheduleEditComponent,
    ScriptureViewComponent,
    ScriptureAddComponent,
    ScriptureEditComponent,
    ScripturesViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
