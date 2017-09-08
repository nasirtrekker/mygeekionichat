import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-send-message-box',
  templateUrl: 'send-message-box.component.html'
})
export class SendMessageBoxComponent {

  @Output() sendMessage: EventEmitter<string>

  content: string;

  constructor() {
    this.sendMessage = new EventEmitter<string>();
  }

  send() {
    this.sendMessage.emit(this.content);
    this.content = "";
  }
}
