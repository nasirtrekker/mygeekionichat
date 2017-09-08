import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagePage } from './message';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MessagePage,
  ],
  imports: [
    IonicPageModule.forChild(MessagePage),
    ComponentsModule
  ],
  exports: [
    MessagePage
  ]
})
export class MessageModule {}
