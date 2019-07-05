import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SvgService } from './svg/svg.service';

@NgModule({
  imports: [
   CommonModule,
   HttpClientModule
  ],
  providers: [
    SvgService
  ]
})
export class CoreDataModule {}
