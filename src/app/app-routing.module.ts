import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CosComponent} from "./cos/cos.component";
import {SinComponent} from "./sin/sin.component";
import {MinComponent} from "./min/min.component";
import {MaxComponent} from "./max/max.component";


const routes: Routes = [
  {path: 'cos', component: CosComponent},
  {path: 'sin', component: SinComponent},
  {path: 'min', component: MinComponent},
  {path: 'max', component: MaxComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
