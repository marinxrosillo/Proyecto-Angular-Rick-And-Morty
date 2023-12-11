import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Character } from '../../models/Character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  data: Character[] = [];

  constructor(private apiService: ApiService) { }

  fillData() {
    this.apiService.getData().subscribe((data) => {
      this.data = data;
    })
  }

  ngOnInit(): void {
    this.fillData();
  }
}