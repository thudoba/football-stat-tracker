import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import { Team } from '../../../services/data';

@Component({
  selector: 'app-create-game',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create_game.html',
  styleUrl: './create_game.css',
})
export class CreateGame {
  private router = inject(Router);

  // Team name inputs (what the admin types)
  homeTeamName: string = '';
  awayTeamName: string = '';

  // Core game fields
  week: number | null = null;
  gameDate: string = '';
  isCompleted: boolean = false;
  homeScore: number | null = null;
  awayScore: number | null = null;

  // Home team stat fields
  htotYds: number | null = null;
  hply: number | null = null;
  hcmp: number | null = null;
  hpatt: number | null = null;
  hpyds: number | null = null;
  hptds: number | null = null;
  hint: number | null = null;
  hratt: number | null = null;
  hryds: number | null = null;
  hrtds: number | null = null;

  // Away team stat fields
  atotYds: number | null = null;
  aply: number | null = null;
  acmp: number | null = null;
  apatt: number | null = null;
  apyds: number | null = null;
  aptds: number | null = null;
  aint: number | null = null;
  aratt: number | null = null;
  aryds: number | null = null;
  artds: number | null = null;

  saving = false;
  error = '';

  // Fetch all teams from Firebase and find one by name (case-insensitive)
  private async findTeamByName(name: string): Promise<(Team & { id: string }) | null> {
    const snapshot = await getDocs(collection(db, 'teams'));
    const match = snapshot.docs.find((d) => {
      const teamName: string = (d.data() as any)['name'] ?? '';
      return teamName.toLowerCase().trim() === name.toLowerCase().trim();
    });
    if (!match) return null;
    return { id: match.id, ...match.data() } as Team & { id: string };
  }

  async makeGame() {
    if (!this.homeTeamName || !this.awayTeamName || !this.week || !this.gameDate) {
      this.error = 'Home Team, Away Team, Week, and Game Date are required.';
      return;
    }

    this.saving = true;
    this.error = '';

    try {
      const homeTeam = await this.findTeamByName(this.homeTeamName);
      const awayTeam = await this.findTeamByName(this.awayTeamName);

      if (!homeTeam) {
        this.error = `Could not find a team named "${this.homeTeamName}" in the database. Check the spelling and try again.`;
        this.saving = false;
        return;
      }
      if (!awayTeam) {
        this.error = `Could not find a team named "${this.awayTeamName}" in the database. Check the spelling and try again.`;
        this.saving = false;
        return;
      }

      const gameData: Record<string, any> = {
        homeTeamId: homeTeam.id,
        awayTeamId: awayTeam.id,
        homeTeam: homeTeam.name,
        awayTeam: awayTeam.name,
        homeTeamLogo: homeTeam.logo,
        awayTeamLogo: awayTeam.logo,
        week: this.week,
        gameDate: this.gameDate,
        isCompleted: this.isCompleted,

        homeScore: this.homeScore,
        awayScore: this.awayScore,

        htotYds: this.htotYds,
        hply: this.hply,
        hcmp: this.hcmp,
        hpatt: this.hpatt,
        hpyds: this.hpyds,
        hptds: this.hptds,
        hint: this.hint,
        hratt: this.hratt,
        hryds: this.hryds,
        hrtds: this.hrtds,

        atotYds: this.atotYds,
        aply: this.aply,
        acmp: this.acmp,
        apatt: this.apatt,
        apyds: this.apyds,
        aptds: this.aptds,
        aint: this.aint,
        aratt: this.aratt,
        aryds: this.aryds,
        artds: this.artds,
      };

      await addDoc(collection(db, 'games'), gameData);
      this.router.navigate(['/games']);
    } catch (e) {
      console.error(e);
      this.error = 'Failed to save game. Please try again.';
    } finally {
      this.saving = false;
    }
  }
}
