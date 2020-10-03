import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoPageComponent} from './pages/todo-page/todo-page.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {AppFooterComponent} from './components/app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    TodoListComponent,
    TodoPageComponent,
    SettingsPageComponent,
    AppFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
