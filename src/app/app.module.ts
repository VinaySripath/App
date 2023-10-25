import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserViewComponent } from './user-view/user-view.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SideComponent } from './side/side.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ExploreComponent } from './explore/explore.component';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { HomeComponent } from './home/home.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { TestComponent } from './test/test.component';

const allLinks: Routes = [
  {
    path: 'enrol',
    component: ExploreComponent,
  },
  { path: 'home/main', component: MainComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'test',
        component: TestComponent,
        outlet: 'outlettest',
      },
    ],
  },
  {
    path: 'home-admin',
    component: AdminHomeComponent,
  },
  {
    path: 'newcourse',
    component: AddCourseComponent,
  },
  {
    path: '',
    component: LoginPageComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UserViewComponent,
    FooterComponent,
    MainComponent,
    SideComponent,
    LoginPageComponent,
    ExploreComponent,
    HomeComponent,
    AdminHomeComponent,
    AdminMainComponent,
    AdminSideComponent,
    AddCourseComponent,
    TestComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(allLinks)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
