import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { StatsPageComponent } from './stats-page/stats-page.component';
import { ChartsPageComponent } from './charts-page/charts-page.component';


const routes: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component: MainPageComponent},
    {path: 'stats', component: StatsPageComponent},
    {path: 'stats/:id', component: ChartsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
