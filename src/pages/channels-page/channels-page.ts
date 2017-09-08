import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ChatService } from '../../providers/chat.service';
import { Observable } from 'rxjs/Observable';
import { Channel } from '../../models/channel/channel.interface';
import { FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-channels-page',
  templateUrl: 'channels-page.html',
})
export class ChannelsPage {

  channelList: FirebaseListObservable<Channel[]>
  
  constructor(private chat: ChatService, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad () {
    //get channels
    this.getChannels();
  }
  selectChannel(channel: Channel) {
    this.navCtrl.push('ChannelChat', { channel });
  }
  showAddChannelDialog() {
    this.alertCtrl.create({
      title: 'Channel Name',
      inputs: [{
        name: 'channelName'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.chat.addChannel(data.channelName)
          }
        }
      ]
    }).present();
  }

  getChannels(){
    this.channelList = this.chat.getChannelListRef();
  }
}
