import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Component } from './tab-1/tab-1.component';
import { Tab2Component } from './tab-2/tab-2.component';
import { Tab3Component } from './tab-3/tab-3.component';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
    // { path: '', component: HomeComponent },
    // { path: 'about', component: AboutComponent },
    // { path: 'contact', component: ContactComponent },
    // Add more routes as needed
];

@NgModule({
    declarations: [
        AppComponent,
        Tab1Component,
        Tab2Component,
        Tab3Component
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    exports: [
        RouterModule
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule { }
