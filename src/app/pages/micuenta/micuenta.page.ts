import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.page.html',
  styleUrls: ['./micuenta.page.scss'],
})
export class MicuentaPage implements OnInit {
  defaultImage = 'assets/images/profile.jpg';
  photo: SafeResourceUrl;
  takedPhoto = {};
  username: string;
  genero: string;

  constructor(private sanitizer: DomSanitizer,
              private alertCtrl: AlertController,
              private router: Router) { }

  ngOnInit() {
    const hasPhoto = JSON.parse(localStorage.getItem('profileImage'));
    if(hasPhoto){
      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(hasPhoto && hasPhoto.webPath);
    }
    if(localStorage.getItem('username') !== 'undefined') { 
      this.username = localStorage.getItem('username');
    }
    if(localStorage.getItem('genero') !== 'undefined') { 
      this.genero = localStorage.getItem('genero');
    }
  }

  async takePhoto() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });
    this.takedPhoto = image;
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.webPath);
  }

  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Perfil actualizado',
      message: 'Se almaceno tu información en localStorage',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'primary',
          handler: () => {
            this.router.navigate(['/home']);
          }
        }
      ]
    });
    await alert.present();
  }

  saveProfile(){
    if(Object.keys(this.takedPhoto).length !== 0) {
      localStorage.setItem('profileImage', JSON.stringify(this.takedPhoto));
    }
    if(this.username){
      localStorage.setItem('username', this.username);
    }
    if(this.genero) {
      localStorage.setItem('genero', this.genero);
    }
    this.openAlert();
  }
}
