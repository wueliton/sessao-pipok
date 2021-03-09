import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleton-loader',
  template: ` <div [ngStyle]="getMyStyles()" class="skelt-load loader"></div> `,
  styleUrls: ['./seleton-loader.component.sass'],
})
export class SeletonLoaderComponent implements OnInit {
  @Input() Cwidth: number;
  @Input() Cheigth: number;
  @Input() circle: boolean;

  constructor() {
    this.Cwidth = 0;
    this.Cheigth = 0;
    this.circle = false;
  }

  ngOnInit(): void {}

  getMyStyles() {
    const myStyles = {
      'width.px': this.Cwidth ? this.Cwidth : '',
      'height.px': this.Cheigth ? this.Cheigth : '',
      'border-radius': this.circle ? '50%' : '',
    };

    return myStyles;
  }
}
