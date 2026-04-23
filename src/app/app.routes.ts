import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { GameList } from './pages/game-list/game-list';
import { TeamList } from './pages/team-list/team-list';

export const routes: Routes = [
    {path: '', component: Dashboard}, 
    {path: 'games', component: GameList},
    {path: 'teams', component: TeamList},
    {path: 'teams/:conference', component: TeamList}
];
