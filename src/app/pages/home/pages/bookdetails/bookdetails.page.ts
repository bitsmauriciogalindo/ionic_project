import { Task } from './../../../../interfaces/task';
import { TaskService } from './../../../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.page.html',
  styleUrls: ['./bookdetails.page.scss'],
})
export class BookdetailsPage implements OnInit {

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}
  rating = Array;
  id: string;
  public book: any = {};

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getBookDetails(this.id);
  }

  getBookDetails(id: string) {
    this.taskService
    .getBookDetails(id)
    .subscribe(book => {
      console.log(book);
      this.book = book;
    });
  }
}
