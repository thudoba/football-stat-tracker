import { Component, ChangeDetectorRef, inject, OnInit } from '@angular/core';
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
  private cdr = inject(ChangeDetectorRef);

  constructor(
    private route: ActivatedRoute,
    private data: Data
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.game = await this.data.getGameById(id || '');
    this.cdr.detectChanges();

  }
}
