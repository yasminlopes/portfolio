import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalComponentsModule } from 'src/app/global-components/global-components.module';
import { NavbarComponent } from './container/navbar.component';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    BrowserModule,
    GlobalComponentsModule,
  ],
  exports: [NavbarComponent],
})
export class NavBarModule {}
