import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Data } from '../../services/data';

@Component({
  selector: 'app-team-list',
  imports: [RouterLink],
  templateUrl: './team-list.html',
  styleUrl: './team-list.css',
})
export class TeamList {
  conference: string = '';
  filteredTeams: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private data: Data
  ) {}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.conference = params.get('conference') || '';
      this.filterTeams();
    });
  }
  filterTeams() {
  if (!this.conference) {
    this.filteredTeams = this.data.getTeams();
  } else {
    this.filteredTeams = this.data.getTeamsByConference(this.conference);
  }
}

}
