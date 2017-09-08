import { Message } from '../../models/messages/message.interface';
import { USER_LIST } from '../profiles/profiles';

const userList = USER_LIST;
const messageList: Message[] = [];

// userList.forEach(user => {
//   messageList.push({user: user, date: new Date(), lastMessage: 'Hello'})
//   messageList.push({user: user, date: new Date(), lastMessage: 'Hello'})
//
// })

export const MESSAGE_LIST = messageList;
