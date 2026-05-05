import { Component, computed, inject, signal } from '@angular/core';
import { Data, Game } from '../../services/data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-game-list',
  imports: [RouterLink],
  templateUrl: './game-list.html',
  styleUrl: './game-list.css',
})
export class GameList {
  games = signal<Game[]>([])
  filteredGames = signal<Game[]>([])
  gameStrings = signal<{game:Game, string:string}[]>([])

  dataService = inject(Data)

  async ngOnInit(){
    this.games.set(await this.dataService.getGames())
    this.filteredGames.set(this.games())
    var arr = []
    for(let game of this.filteredGames()){
      if(game.awayTeamId && game.homeTeamId)
      arr.push({game:game, 
        string: (await this.dataService.getTeamById(game.awayTeamId))?.name + " @ " + (await this.dataService.getTeamById(game.homeTeamId))?.name})
    }
    this.gameStrings.set(arr)
  }
}
