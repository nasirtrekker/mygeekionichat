import { Component, OnInit } from "@angular/core";
import { ChatService } from '../../providers/chat.service';
import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';

import { Message } from '../../models/messages/message.interface';

@Component({
  selector: 'app-last-message-list',
  templateUrl: 'last-message-list.component.html'
})
export class LastMessageListComponent implements OnInit{

  messageList$: Observable<Message[]>

  constructor (private navCtrl: NavController, private chat: ChatService) {

  }
  ngOnInit() {
    this.messageList$ = this.chat.getLastMessagesForUser()
  }

  navigateToMessage(message: Message) {
    const selectedProfile = {
      $key: message.userToId,
      firstName: message.userToProfile.firstName,
      lastName: message.userToProfile.lastName
    }

    this.navCtrl.push('MessagePage', {profile: selectedProfile})
  }
}
