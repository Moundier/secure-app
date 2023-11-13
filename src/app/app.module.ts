import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Tab1Component } from './tab-1/tab-1.component';
import { Tab2Component } from './tab-2/tab-2.component';
import { Tab3Component } from './tab-3/tab-3.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsComponent } from './tabs/tabs.component';

import { IonicModule } from '@ionic/angular';
import { ThemeService } from './service/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    Tab1Component,
    Tab2Component,
    Tab3Component,
  ],
  imports: [
    IonicModule, /* Ionic */  
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
