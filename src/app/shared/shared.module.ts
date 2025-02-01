import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeRoutingModule } from '../home/home-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
