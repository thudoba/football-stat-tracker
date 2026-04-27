import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { GameList } from './pages/game-list/game-list';
import { TeamList } from './pages/team-list/team-list';
import { TeamDetail } from './pages/team-detail/team-detail';

export const routes: Routes = [
    {path: '', component: Dashboard}, 
    {path: 'games', component: GameList},
    {path: 'teams', component: TeamList},
    {path: 'teams/nfc', component: TeamList },
    {path: 'teams/afc', component: TeamList },
    {path: 'teams/:team', component: TeamDetail }
];
