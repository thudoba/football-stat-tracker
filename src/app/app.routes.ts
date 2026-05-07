import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { GameList } from './pages/game-list/game-list';
import { TeamList } from './pages/team-list/team-list';
import { TeamDetail } from './pages/team-detail/team-detail';
import { GameDetail } from './pages/game-detail/game-detail';
import { Login } from './pages/login/login';
import { Admin } from './pages/login/admin/admin';
import { CreateGame } from './pages/login/admin/create_game';
import { authGuard } from './services/auth_guard';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'games', component: GameList },
  { path: 'teams', component: TeamList },
  { path: 'teams/conference/:conference', component: TeamList },
  { path: 'teams/:id', component: TeamDetail },
  { path: 'games/:id', component: GameDetail },
  { path: 'login', component: Login },
  { path: 'admin', component: Admin, canActivate: [authGuard] },
  { path: 'admin/create-game', component: CreateGame, canActivate: [authGuard] },
];
