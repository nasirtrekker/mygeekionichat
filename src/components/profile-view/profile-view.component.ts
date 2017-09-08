import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { DataService } from '../../providers/data.service';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import { Loading, LoadingController } from 'ionic-angular';

@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})

export class ProfileViewComponent implements OnInit{
  public authUser: User;
  public userProfile: Profile;
  private loader: Loading;

  @Output() existingProfile: EventEmitter<Profile>;

  constructor(private loading: LoadingController, private data: DataService, public auth: AuthService) {

    this.existingProfile = new EventEmitter<Profile>();

    this.loader = this.loading.create({
      content: 'Loading profile...'
    });
  }

  ngOnInit() {
    this.loader.present();

    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.userProfile = profile;
      this.existingProfile.emit(this.userProfile);
      this.loader.dismiss();
    })
  }
}
