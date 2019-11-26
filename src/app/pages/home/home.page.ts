import { Task } from './../../interfaces/task';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private taskService: TaskService
  ) {}

  books: Task[] = [];

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.taskService
    .getAllBooks()
    .subscribe(books => {
      this.books = books;
    });

  }

}
