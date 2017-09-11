import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendMessageBoxComponent } from './send-message-box.component';

@NgModule({
  declarations: [
    SendMessageBoxComponent,
  ],
  imports: [
    IonicPageModule.forChild(SendMessageBoxComponent),
  ],
  exports: [
    SendMessageBoxComponent
  ]
})
export class SendMessageBoxModule {}
