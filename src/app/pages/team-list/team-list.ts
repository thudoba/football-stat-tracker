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
  searchTerm: string = '';
  conference: string = '';
  filteredTeams: any[] = [];
  teams: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private data: Data
  ) {}


async ngOnInit() {

  this.teams = await this.data.getTeams();

  this.conference = this.route.snapshot.paramMap.get('conference') || '';
  this.filterTeams();

  this.route.paramMap.subscribe(params => {
    this.conference = params.get('conference') || '';
    this.filterTeams();
  });
}
 filterTeams() {
    let results = this.teams;

    if (this.conference) {
      results = results.filter(t => 
        t.conference?.toLowerCase() === this.conference.toLowerCase()
      );
    }

    if (this.searchTerm.trim()) {
      const search = this.searchTerm.toLowerCase();
      results = results.filter(t => 
        (t.teamName?.toLowerCase().includes(search)) || 
        (t.name?.toLowerCase().includes(search))
      );
    }

    this.filteredTeams = results;
  }
  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
    this.filterTeams();
  }

}
