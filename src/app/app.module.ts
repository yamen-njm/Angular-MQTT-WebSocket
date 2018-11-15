import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {
  MqttModule,
  IMqttServiceOptions
} from 'ngx-mqtt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'm15.cloudmqtt.com',
  port: 38724,
  protocol: 'wss',
  username: 'senfdtah',
  password: 'QFMngZSY4SL1',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
