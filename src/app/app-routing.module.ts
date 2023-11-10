import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Tab1Component } from "./tab-1/tab-1.component";
import { Tab2Component } from "./tab-2/tab-2.component";
import { Tab3Component } from "./tab-3/tab-3.component";

const routes: Routes = [
    { path: 'tab-1', component: Tab1Component },
    { path: 'tab-2', component: Tab2Component, data: { animation: 'isRight' } },
    { path: 'tab-3', component: Tab3Component, data: { animation: 'isLeft' } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }