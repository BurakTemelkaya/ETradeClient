import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private toastrService:CustomToastrService){
    toastrService.message("Merhaba","Burak",{
      messageType:ToastrMessageType.Info,
      position:ToastrPosition.TopCenter
    });
    toastrService.message("Merhaba","Burak",{
      messageType:ToastrMessageType.Success,
      position:ToastrPosition.BottomCenter
    });
    toastrService.message("Merhaba","Burak",{
      messageType:ToastrMessageType.Error,
      position:ToastrPosition.TopLeft
    });
    toastrService.message("Merhaba","Burak",{
      messageType:ToastrMessageType.Warning,
      position:ToastrPosition.BottomRight
    });
  }
  title = 'ETradeClient';
}
