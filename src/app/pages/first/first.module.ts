import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first.component';

@NgModule({
  declarations: [FirstComponent],
  imports: [CommonModule, FirstRoutingModule],
})
export class FirstModule {}
