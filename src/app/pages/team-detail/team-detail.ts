import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../../services/data';


@Component({
  selector: 'app-team-detail',
  imports: [CommonModule],
  templateUrl: './team-detail.html',
  styleUrl: './team-detail.css',
})
export class TeamDetail implements OnInit{

  team: any;



  constructor(
    private route: ActivatedRoute,
    private data: Data
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const teamParam = params.get('team');
      this.team = this.data.getTeamByName(teamParam || '');
    });
}
}

