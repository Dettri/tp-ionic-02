import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // title
  title: string;

  // camera
  imgData: string;

  // geolocation
  
  //latitude: number;
  //longitude: number;

  listGeolocation:any [];
  latitude2: string;
  longitude2: string;

  constructor(private alertController: AlertController, private camera: Camera, private geolocation: Geolocation, private localNotifications: LocalNotifications) {}

  updateTitle() {
    this.title = 'Mon Nouveau Titre';
  }

  /**
   * https://ionicframework.com/docs/api/alert
   */
  async fireAlert() {
    // creation de l alerte
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    // quand l alerte sera masquée
    alert.onDidDismiss().then(() => console.log('alerte masquée'))

    // affichage de l alerte
    await alert.present();
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      console.log(imageData);
      this.imgData = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  getGeolocation() {
    /*
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      //resp.coords.latitude
      //resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     */

     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.latitude2 = "latitude : " + data.coords.latitude;
      this.longitude2 = "longitude : " + data.coords.longitude;
      this.listGeolocation = ["latitude : " + data.coords.latitude, "longitude : " + data.coords.longitude];
     });
  }

  // Schedule a single notification
  showNotification(){
    this.localNotifications.schedule({
      id: 1,
      text: 'Your notification appears',
      data: { secret: "key" }
    });
  }
 
}
