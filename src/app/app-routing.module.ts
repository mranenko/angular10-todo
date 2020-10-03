import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Pages */
import {TodoPageComponent} from './pages/todo-page/todo-page.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';


const routes: Routes = [
  { path:  '', pathMatch: 'full', redirectTo:  'todo' },
  { path:  'todo', pathMatch: 'full', component:  TodoPageComponent },
  { path:  'settings', pathMatch: 'full', component:  SettingsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
