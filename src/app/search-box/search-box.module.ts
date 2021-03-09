import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBoxComponent } from './input-box';
import { FormsModule } from '@angular/forms';
import { SeletonLoaderModule } from './seleton-loader';

@NgModule({
  declarations: [InputBoxComponent],
  imports: [CommonModule, FormsModule, SeletonLoaderModule],
  exports: [InputBoxComponent],
})
export class SearchBoxModule {}
