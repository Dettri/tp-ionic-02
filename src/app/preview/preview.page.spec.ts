import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreviewPage } from './preview.page';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {LoginService} from '../services/login.service';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import {RouterTestingModule} from '@angular/router/testing';

describe('PreviewPage', () => {

    let component: PreviewPage;
    let fixture: ComponentFixture<PreviewPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ PreviewPage ],
        imports: [IonicModule.forRoot(), RouterTestingModule],
        providers: [CameraPreview]
        }).compileComponents();

        fixture = TestBed.createComponent(PreviewPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

});