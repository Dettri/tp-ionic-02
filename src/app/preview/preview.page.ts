import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-preview',
  templateUrl: 'preview.page.html',
  styleUrls: ['preview.page.scss'],
})
export class PreviewPage {

    constructor(private cameraPreview: CameraPreview) { }

}