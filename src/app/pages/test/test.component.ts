import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // Add this to support ngIf, ngFor, etc.

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [HttpClientModule, CommonModule],  // Correctly import necessary modules
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  apiResult: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    // Make the API call
    this.http.get<any>(apiUrl).subscribe(
      (response) => {
        this.apiResult = JSON.stringify(response, null, 2);
      },
      (error) => {
        this.apiResult = 'Error fetching data';
      }
    );
  }
}
