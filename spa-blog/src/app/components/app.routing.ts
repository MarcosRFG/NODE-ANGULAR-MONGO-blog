import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }