import {Input, Component, OnInit} from '@angular/core';
import {ChatbotsService} from '../../../services/chatbots.service';
import * as moment from 'moment';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent {
  message: any;

  constructor(private chatbotsService: ChatbotsService) {

  }

  sendMessage() {
    this.chatbotsService.sendMessage(this.message);
    this.message = '';
  }
}
