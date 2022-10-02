import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumaComponent } from './calculos/suma/suma.component';
import { RestaComponent } from './calculos/resta/resta.component';

import { FormsModule } from '@angular/forms';
import { OperacionComponent } from './calculos/operacion/operacion.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { TablaComponent } from './calculos/tabla/tabla.component';
import { CinepolisComponent } from './calculos/cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    SumaComponent,
    RestaComponent,
    OperacionComponent,
    ProductListComponent,
    MenuComponent,
    ProductoFilterPipe,
    TablaComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
