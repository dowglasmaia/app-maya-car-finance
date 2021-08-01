import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { CatalogCarComponent } from './pages/components/catalog-car/catalog-car.component';
import { CardCarComponent } from './pages/components/card-car/card-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    CatalogCarComponent,
    CardCarComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
