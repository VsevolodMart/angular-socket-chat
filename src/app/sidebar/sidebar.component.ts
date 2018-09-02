import {Component, OnInit} from '@angular/core';
import {ChatbotsService} from '../../services/chatbots.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {
  client: string;
  clientList: string[] = [];
  // clientList: string[] = [];

  constructor(private chatbotsService: ChatbotsService) {
  }

  ngOnInit() {
    this.chatbotsService
      .getClients()
      .subscribe((client) => {
        if (client) {
          const parseClient = JSON.parse(client);
          this.clientList = parseClient;
          console.log(parseClient);
          // console.log(this.clientList);
        }


        // this.messages.push(message);
      });
  }

  public allClients(){
    console.log(this.clientList);
  }

// this.chatbotsService.getConfig()
//   .subscribe((data: Config) => this.config = {
//     heroesUrl: data['heroesUrl'],
//     textfile: data['textfile']
//   });

}

