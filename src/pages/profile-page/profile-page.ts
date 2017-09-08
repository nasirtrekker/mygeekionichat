import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.interface';
import { AuthService } from '../../providers/auth.service';

@IonicPage()
@Component({
  selector: 'page-profile-page',
  templateUrl: 'profile-page.html',
})
export class ProfilePage {

  existingProfile = {} as Profile;

  constructor(private auth: AuthService, public navCtrl: NavController, public navParams: NavParams) {
  }

//don't have to retrieve profile from firebase again
  getExistingProfile(profile: Profile) {
    this.existingProfile = profile;
  }

  signOut() {
    this.auth.signOut();
    this.navCtrl.setRoot('LoginPage');
  }

  navigateToEditProfilePage() {
    this.navCtrl.push('EditProfilePage', { existingProfile: this.existingProfile});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
