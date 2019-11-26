import { TaskService } from './../../../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addingbook',
  templateUrl: './addingbook.page.html',
  styleUrls: ['./addingbook.page.scss'],
})

export class AddingbookPage implements OnInit {

  constructor(private taskService: TaskService,
              private alertCtrl: AlertController,
              private router: Router) { }

  book = {};

  ngOnInit() {
  }

  createBook(book){
    this.taskService.createBook(book)
    .subscribe((newBook) => {
      console.log(book);
      localStorage.setItem('localbook', JSON.stringify(book));
      this.openAlert();
    });
  }

  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Libro agregado',
      message: 'En teoria se agregó y se envio por post a la REST API, ver network (tmb se almacenó en localStorage)',
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
}
