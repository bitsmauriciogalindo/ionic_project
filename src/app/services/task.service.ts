import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private api = 'https://my-json-server.typicode.com/bitsmauriciogalindo/test';

  constructor(
    private http: HttpClient
  ) { }

  getAllBooks() {
    const path = `${this.api}/books/`;
    return this.http.get<Task[]>(path);
  }

  createBook(book: Task) {
    const path = `${this.api}/books`;
    return this.http.post<Task>(path , book);
  }

  getBookDetails(id: string) {
    const path = `${this.api}/books/${id}`;
    return this.http.get<Task>(path);
  }
}
