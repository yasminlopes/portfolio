import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { pagesRoutes } from './pages.routing';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(pagesRoutes),
    SharedModule
  ],
  exports: [],
})
export class PagesModule {}
