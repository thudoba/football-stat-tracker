import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../../services/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-detail',
  imports: [CommonModule],
  templateUrl: './game-detail.html',
  styleUrl: './game-detail.css',
})
export class GameDetail {
  game: any;

  constructor(
    private route: ActivatedRoute,
    private data: Data
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.game = await this.data.getGameById(id || '');
  }
}
