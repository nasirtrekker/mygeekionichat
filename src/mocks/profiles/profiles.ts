import { Profile } from '../../models/profile/profile.interface';

const userList: Profile[] = [
  {
    firstName: 'Nasir',
    lastName: 'Brewster',
    email: 'marni@statumhealth.com',
    avatar: 'assets/img/avatar.png',
    dateOfBirth: new Date(),
    $key: '438ruhfdsilfhsd8'
  },
  {
    firstName: 'Uddin',
    lastName: 'Halliday',
    email: 'paul@statumhealth.com',
    avatar: 'assets/img/avatar.png',
    dateOfBirth: new Date(),
    $key: 'cja4j2o85u82oh5ywin'
  },
  {
    firstName: 'David',
    lastName: 'Callen',
    email: 'monica@statumhealth.com',
    avatar: 'assets/img/avatar.png',
    dateOfBirth: new Date(),
    $key: '53y843hjkhrjk43hj45'
  },
  {
    firstName: 'Suzon',
    lastName: 'Preesh',
    email: 'sarah@statumhealth.com',
    avatar: 'assets/img/avatar.png',
    dateOfBirth: new Date(),
    $key: 'a4h325y89y8543y5h48ioh5y'
  }
];

export const USER_LIST = userList;
