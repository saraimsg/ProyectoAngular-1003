import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinepolisComponent } from './calculos/cinepolis/cinepolis.component';
import { SumaComponent } from './Calculos/suma/suma.component';
import { TablaComponent } from './calculos/tabla/tabla.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {path:'', component: ProductListComponent},
  {path:'suma', component:SumaComponent},
  {path:'tabla', component:TablaComponent},
  {path:'cinepolis', component:CinepolisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
