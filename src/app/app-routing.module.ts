import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/routing/about/about.component';
import { MainComponent } from './components/routing/main/main.component';
import { SignInComponent } from './components/routing/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
