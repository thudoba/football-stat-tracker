import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Data } from '../../services/data';

@Component({
  selector: 'app-game-list',
  imports: [RouterModule],
  templateUrl: './game-list.html',
  styleUrl: './game-list.css',
})
export class GameList {
  searchTerm: string = '';
  conference: string = '';
  filteredTeams: any[] = [];
  filteredGames: any[] = [];  
  teams: any[] = [];
  games: any[] = [];

  constructor(private data: Data, private cdr: ChangeDetectorRef) {}
 async ngOnInit() {
  this.games = await this.data.getGames();
  this.filteredGames = this.games;
  this.cdr.detectChanges();
}
  onSearchChange(event: any) {
  this.searchTerm = event.target.value.toLowerCase();

  this.filteredGames = this.games.filter(game =>
    game.homeTeam.toLowerCase().includes(this.searchTerm) ||
    game.awayTeam.toLowerCase().includes(this.searchTerm)
  );
}
  filterTeams() {
    let results = this.teams;

    if (this.conference) {
      results = results.filter(t => 
        t.conference?.toLowerCase() === this.conference.toLowerCase()
      );
    }

    if (this.searchTerm.trim()) {
      const search = this.searchTerm.toLowerCase();
      results = results.filter(t => 
        (t.teamName?.toLowerCase().includes(search)) || 
        (t.name?.toLowerCase().includes(search))
      );
    }
    

    this.filteredTeams = results;
  }
}
