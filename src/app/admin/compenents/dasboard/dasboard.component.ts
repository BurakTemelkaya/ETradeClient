import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {

  constructor(private alertify: AlertifyService) {
  }

  ngOnInit(): void {

  }

  m() {
    this.alertify.message("Merhaba", {
      messageType: MessageType.Success,
      delay: 5,
      position: Position.TopRight
    });
  }

  d() {
    this.alertify.dismiss();
  }
}


