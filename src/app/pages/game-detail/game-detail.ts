import { Component, ChangeDetectorRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from '../../services/data';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth_service';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';

@Component({
  selector: 'app-game-detail',
  imports: [CommonModule],
  templateUrl: './game-detail.html',
  styleUrl: './game-detail.css',
})
export class GameDetail implements OnInit {
  game: any;

  private cdr = inject(ChangeDetectorRef);
  auth = inject(AuthService);
  private router = inject(Router);

  constructor(
    private route: ActivatedRoute,
    private data: Data,
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.game = await this.data.getGameById(id || '');
    this.cdr.detectChanges();
  }
  async deleteGame() {
    if (!this.game?.id) return;
    const confirmed = confirm('Are you sure you want to delete this game?');
    if (!confirmed) return;

    await deleteDoc(doc(db, 'games', this.game.id));
    this.router.navigate(['/games']);
  }
}
