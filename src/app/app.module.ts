import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

/* app components */
import {AppFooterComponent} from './components/app-footer/app-footer.component';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';

/* app pages */
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {TodoPageComponent} from './pages/todo-page/todo-page.component';

/* app pipes */
import {HideCompletedPipe} from './pipes/hide-completed.pipe';
import {IncompleteFirstPipe} from './pipes/incomplete-first.pipe';
import {SortPipe} from './pipes/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent,
    TodoListComponent,
    SettingsPageComponent,
    TodoPageComponent,
    HideCompletedPipe,
    IncompleteFirstPipe,
    SortPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
