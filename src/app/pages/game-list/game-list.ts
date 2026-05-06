import { Component, inject, signal, ChangeDetectorRef, OnInit } from '@angular/core';
import { Data, Game, Team } from '../../services/data';
import { RouterLink, RouterModule, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './game-list.html',
  styleUrl: './game-list.css',
})

export class GameList implements OnInit {

  games = signal<Game[]>([]);
  filteredGames = signal<Game[]>([]);
  teams = signal<Team[]>([]);
  filteredTeams = signal<Team[]>([]);
  gameStrings = signal<{ game: Game; string: string }[]>([]);

  searchTerm: string = '';
  conference: string = '';

  private dataService = inject(Data);
  private cdr = inject(ChangeDetectorRef);

  async ngOnInit() {

    const allGames = await this.dataService.getGames();
    this.games.set(allGames);
    this.filteredGames.set(allGames);

    const arr = [];
    for (const game of allGames) {
      if (game.awayTeamId && game.homeTeamId) {
        const away = await this.dataService.getTeamById(game.awayTeamId);
        const home = await this.dataService.getTeamById(game.homeTeamId);

        arr.push({
          game: game,
          string: `${away?.name ?? 'Unknown'} @ ${home?.name ?? 'Unknown'}`
        });
      }
    }
    this.gameStrings.set(arr);

    this.cdr.detectChanges();
  }


  onSearchChange(event: any) {
    const term = event.target.value.toLowerCase().trim();
    this.searchTerm = term;

    if (!term) {
      this.filteredGames.set(this.games());
      return;
    }

    const filtered = this.games().filter(game => {
      const homeName = game.homeTeam?.toLowerCase() ?? '';
      const awayName = game.awayTeam?.toLowerCase() ?? '';
      const weekStr = game.week?.toString() ?? '';

      return (
        homeName.includes(term) ||
        awayName.includes(term) ||
        weekStr.includes(term) ||       
        `week ${weekStr}`.includes(term) 
      );
    });

    this.filteredGames.set(filtered);
  }

  filterTeams() {
    let results = this.teams();

    if (this.conference) {
      results = results.filter(t =>
        t.conference?.toLowerCase() === this.conference.toLowerCase()
      );
    }

    if (this.searchTerm.trim()) {
      const search = this.searchTerm.toLowerCase();

      results = results.filter(t =>
        t.name?.toLowerCase().includes(search)
      );
    }

    this.filteredTeams.set(results);
  }
}