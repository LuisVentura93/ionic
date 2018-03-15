import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isOn: boolean = false;
  constructor(public navCtrl: NavController, private flashlight: Flashlight) {

  }

  async isAvailable():Promise<boolean>{
    try{
      //let available=await this.flashlight.available();
      //console.log(available)
      return await this.flashlight.available();
    }
    catch(e){
      console.log(e);
    }
  }

  async toggleFlash():Promise<void>{
    try{
      let available = await this.isAvailable();
      if (available){
        await this.flashlight.toggle();
        this.isOn = !this.isOn;
      }
      else
        console.log("It is not available");
    }
    catch(e){
      console.log(e);
    }
  }

  async turOnFlash():Promise<void>{
    await this.flashlight.switchOn();
  }

  async turnOffFlash():Promise<void>{
    await this.flashlight.switchOff();
  }

  async isFlashOn():Promise<boolean>{
    return await this.flashlight.isSwitchedOn();
  }

}
