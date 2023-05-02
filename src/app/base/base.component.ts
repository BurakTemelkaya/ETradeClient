import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) { }
  showSpinner(spinerNameType: SpinnerType) {
    this.spinner.show(spinerNameType);

    setTimeout(()=>this.hideSpinner(spinerNameType),1000);
  }

  hideSpinner(spinerNameType: SpinnerType){
    this.spinner.hide(spinerNameType);
  }
}

export enum SpinnerType {
  ballAtom = "s1",
  ballScaleMultiple = "s2",
  allSpinClockwiseFadeRotating = "s3"
}
