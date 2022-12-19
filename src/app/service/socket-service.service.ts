import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { ServiceService } from './staff-service/service.service';
// import * as io from 'socket.io-client'

@Injectable({
  providedIn: 'root',
})
export class SocketServiceService {
  socket: any;
  readonly url: string = 'http://18.205.244.164:5001';

  constructor(private service: ServiceService) {
    this.socket = io(this.url);
  }

  public sendid() {
    this.socket.on('connect', () => {
      console.log(this.socket.id);
    });
  }

  public sendMessage(message: any) {
    this.socket.emit('new-message', message);
    console.log('new-message', message, this.socket.id);
  }
  public getMessages = () => {
    console.log('gotData');
    return Observable.create((observer: any) => {
      this.socket.on('new-message', (message: any) => {
        this.service.createpatient(message).subscribe();
        observer.next(message);
      });
    });
  };
}
