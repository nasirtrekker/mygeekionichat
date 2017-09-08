import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MESSAGE_LIST } from '../../mocks/messages/messages';
import { Message } from '../../models/messages/message.interface';

@IonicPage()
@Component({
  selector: 'page-inbox-page',
  templateUrl: 'inbox-page.html',
})
export class InboxPage {

  messageList : Message[] = MESSAGE_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.messageList);
  }
  navigateToSearchUserPage() {
    this.navCtrl.push('SearchUserPage');
  }
}
