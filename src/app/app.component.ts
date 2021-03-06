import {Component, OnInit} from '@angular/core';
import {SplitioService} from "./splitio.service";
import {Treatments} from "@splitsoftware/splitio/types/splitio";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  treatments!: Treatments;

  constructor(private splitioService: SplitioService) {
    splitioService.initSdk();
  }

  getColor(): string {
    const color = this.splitioService.getTreatment('color')
    if(color === 'blue'){
      return 'blue'
    } else if (color === 'black') {
      return 'black'
    } else {
      return ''
    }
  }
}
