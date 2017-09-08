import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChannelChat } from './channel-chat';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ChannelChat,
  ],
  imports: [
    IonicPageModule.forChild(ChannelChat),
    ComponentsModule
  ],
  exports: [
    ChannelChat
  ]
})
export class ChannelChatModule {}
