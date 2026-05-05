import { Component, inject, signal } from '@angular/core';
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
  dataService = inject(Data)

  async ngOnInit(){
    this.games.set(await this.dataService.getGames())
    this.filteredGames.set(this.games())
  }
}
