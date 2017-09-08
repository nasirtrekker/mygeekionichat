
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
 import "rxjs/add/operator/mergeMap";
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/first';

import { Channel } from '../models/channel/channel.interface';
import { ChannelMessage } from '../models/channel/channel-message.interface';
import { Message } from '../models/messages/message.interface';
import { AuthService } from './auth.service';

@Injectable()

export class ChatService {
  constructor(private auth: AuthService, private database: AngularFireDatabase) {

  }
  addChannel(channelName: string) {
    this.database.list(`channel-names`).push({ name: channelName });
  }

  getChannelListRef(): FirebaseListObservable<Channel> {
    return this.database.list(`channel-names`);
  }

  getChannelChatRef(channelKey: string) {
    return this.database.list(`channels/${channelKey}`);
  }

  async sendChannelChatMessage(channelKey: string, message: ChannelMessage){
     await this.database.list(`/channels/${channelKey}`).push(message);
  }

  async sendChat(message: Message) {
    await this.database.list(`/messages`).push(message);
  }

  getChats(userTwoId: string) {
    return this.auth.getAuthenticatedUser()
      .map(auth => auth.uid)
      .mergeMap(uid => this.database.list(`/user-messages/${uid}/${userTwoId}`))
      .mergeMap(chats => {
        return Observable.forkJoin(
          chats.map(chat => this.database.object(`/messages/${chat.$key}`).first()),
          (...vals: Message[]) => {
            console.log(vals);
            return vals;
          }
        )
      })
  }

  getLastMessagesForUser(): Observable<Message[]> {
    return this.auth.getAuthenticatedUser()
      .map(auth => auth.uid)
      .mergeMap(authId => this.database.list(`/last-messages/${authId}`))
      .mergeMap(messageIds => {
        return Observable.forkJoin(
          messageIds.map(message => {
            return this.database.object(`/messages/${message.key}`)
              .first()
          }),
          (...values) => {
            console.log(values);
            return values;
          }
        )
      })
  }
}
