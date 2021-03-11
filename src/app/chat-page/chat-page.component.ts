import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Message } from '../message.module';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent {

  @ViewChild('messageInput', {static: true}) messageInput: ElementRef;
  message: Message;

  messageDB: Message[] = [
    {user: 'user1', message: 'this is message one', date: 'date 1'},
    {user: 'user2', message: 'this is message two', date: 'date 2'},
  ];

  sendMessage(){
    this.message = {
      user: 'rogelio',
      message: this.messageInput.nativeElement.value,
      date: this.getDate()
    }

    this.messageInput.nativeElement.value = '';
    this.messageDB.push(this.message);
  }

  // Get day and time for each message
  getDate(){
    let today  = new Date();
    return today.toLocaleString("en-US");
  }

}
