// import { Component, computed, inject, signal, ChangeDetectorRef } from '@angular/core';
// import { Data, Game, Team } from '../../services/data';
// import { RouterLink, RouterModule } from "@angular/router";

// @Component({
//   selector: 'app-game-list',
//   imports: [RouterLink, RouterModule],
//   templateUrl: './game-list.html',
//   styleUrl: './game-list.css',
// })
// export class GameList {
//   games = signal<Game[]>([])
//   filteredGames = signal<Game[]>([])
//   filteredTeams = signal<Team[]>([])
//   gameStrings = signal<{game:Game, string:string}[]>([])
//   searchTerm: string = '';
//   conference: string = '';
//   teams = signal<Team[]>([]);

//   dataService = inject(Data)

//   constructor(private cdr: ChangeDetectorRef){}
  

//   onSearchChange(event: any) {
//   this.searchTerm = event.target.value.toLowerCase();

//   this.filteredGames.set(
//     this.games().filter(game =>
//       game.homeTeam.toLowerCase().includes(this.searchTerm) ||
//       game.awayTeam.toLowerCase().includes(this.searchTerm)
//     )
//   );
// }

//   async ngOnInit(){
//     this.games.set(await this.dataService.getGames())
//     this.filteredGames.set(this.games())
//     var arr = []
//     for(let game of this.filteredGames()){
//       if(game.awayTeamId && game.homeTeamId)
//       arr.push({game:game, 
//         string: (await this.dataService.getTeamById(game.awayTeamId))?.name + " @ " + (await this.dataService.getTeamById(game.homeTeamId))?.name})
//     }
//     this.gameStrings.set(arr)
//     this.cdr.detectChanges();
//   }
//   filterTeams() {
//     let results = this.teams;

//     if (this.conference) {
//       results = results.filter(t => 
//         t.conference?.toLowerCase() === this.conference.toLowerCase()
//       );
//     }

//     if (this.searchTerm.trim()) {
//       const search = this.searchTerm.toLowerCase();
//       results = results.filter(t => 
//         (t.teamName?.toLowerCase().includes(search)) || 
//         (t.name?.toLowerCase().includes(search))
//       );
//     }
    

//     this.filteredTeams.set(results);
//   }
// }
import { Component, inject, signal, ChangeDetectorRef, OnInit } from '@angular/core';
import { Data, Game, Team } from '../../services/data';
import { RouterLink, RouterModule } from "@angular/router";
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
  filteredTeams = signal<Team[]>([]);
  teams = signal<Team[]>([]);
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
  this.searchTerm = event.target.value.toLowerCase();

  if (!this.searchTerm.trim()) {
    this.filteredGames.set(this.games());
    return;
  }

  const filtered = this.games().filter(game => {
    const homeName = game.homeTeam?.toLowerCase() ?? '';
    const awayName = game.awayTeam?.toLowerCase() ?? '';
    
    return homeName.includes(this.searchTerm) || 
           awayName.includes(this.searchTerm);
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
        (t.name?.toLowerCase().includes(search)) ||
        (t.name?.toLowerCase().includes(search))
      );
    }


    this.filteredTeams.set(results);
  }
}