import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Data } from '../../services/data';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private data: Data) {}

uploadTeams() {
  if(confirm("Are you sure? This will add every team from the hardcoded list to Firebase.")) {
    this.data.seedData();
  }
}
}
