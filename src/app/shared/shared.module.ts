import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeRoutingModule } from '../home/home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HomeRoutingModule, HttpClientModule],
  exports: [HeaderComponent],
  providers: [DataService],
})
export class SharedModule {}
