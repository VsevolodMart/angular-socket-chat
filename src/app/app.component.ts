import {Component, OnInit} from '@angular/core';
import {ChatbotsService} from '../services/chatbots.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // message: string;
  // messages: string[] = [];

  constructor(private chatbotsService: ChatbotsService) {
  }

  // sendMessage() {
  //   this.chatbotsService.sendMessage(this.message);
  //   this.message = '';
  // }
  // ngOnInit() {
  //   this.chatbotsService
  //     .getMessages()
  //     .subscribe((message: string) => {
  //       this.messages.push(message);
  //     });
  // }
}

