import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@recreate-shapely-demo/material';
import { CoreDataModule } from '@recreate-shapely-demo/core-data';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ThirdShowcaseComponent } from './home/third-showcase/third-showcase.component';
import { ProjectsShowcaseComponent } from './home/projects-showcase/projects-showcase.component';
import { CustomersCarouselComponent } from './home/customers-carousel/customers-carousel.component';
import { ClientsCarouselComponent } from './home/clients-carousel/clients-carousel.component';
import { CarouselComponent } from './home/customers-carousel/carousel.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, ThirdShowcaseComponent, ProjectsShowcaseComponent, CustomersCarouselComponent, ClientsCarouselComponent, CarouselComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreDataModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
