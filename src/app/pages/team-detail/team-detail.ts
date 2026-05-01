import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../../services/data';


@Component({
  selector: 'app-team-detail',
  imports: [CommonModule],
  templateUrl: './team-detail.html',
  styleUrl: './team-detail.css',
})
export class TeamDetail implements OnInit{

teams: any[] = [];
  team: any;

  constructor(
    private route: ActivatedRoute,
    private data: Data,
    private cdr: ChangeDetectorRef
  ) {}

async ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.team = await this.data.getTeamById(id);
    
    this.cdr.detectChanges(); 
  }
}
  
}

