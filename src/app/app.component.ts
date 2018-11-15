import { Component } from '@angular/core';
import {  Subscription } from 'rxjs';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private subscription: Subscription;
  public message: string;
  msgSent;
  title = 'Mqtt using Web Socket';


  constructor(private _mqttService: MqttService) {
    this.subscription = this._mqttService.observe('street/server').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
      console.log(this.message);
    });

  }

    public unsafePublish(topic: string, message: string): void {
      this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
    }

    public ngOnDestroy() {
      this.subscription.unsubscribe();
  }
  send() {
    console.log(this.msgSent);
     this.unsafePublish('street/server', this.msgSent);
  }
}
