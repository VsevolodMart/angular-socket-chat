import {Input, Component, OnInit} from '@angular/core';

import {ChatbotsService} from '../../services/chatbots.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit{
  message: string;
  messages: string[] = [];

  constructor(private chatbotsService: ChatbotsService) {
  }

  sendMessage() {
    this.chatbotsService.sendMessage(this.message);
    this.message = '';
  }
  ngOnInit() {
    this.chatbotsService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
      });
  }


}
