import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-team-detail',
  imports: [CommonModule],
  templateUrl: './team-detail.html',
  styleUrl: './team-detail.css',
})
export class TeamDetail implements OnInit{

  team: any;

 teams = [
    {
      name: 'Minnesota Vikings', 
      conference: 'nfc',
      logo: 'images/vikingslogo.webp',
      description: 'NFC North Team'
    },
    {
      name: 'Greenbay Packers', 
      conference: 'nfc',
      logo: 'images/packers.webp',
      description: 'NFC North Team'
    },
    {
      name: 'Chicago Bears', 
      conference: 'nfc',
      logo: 'images/bears.jpg',
      description: 'NFC North Team'
    },
    {
      name: 'Detroit Lions', 
      conference: 'nfc',
      logo: 'images/lions.webp',
      description: 'NFC North Team'
    },
    {
      name: 'Philadelphia Eagles', 
      conference: 'nfc',
      logo: 'images/eagles.webp',
      description: 'NFC East Team'
    },
    {
      name: 'Dallas Cowboys', 
      conference: 'nfc',
      logo: 'images/cowboys.webp',
      description: 'NFC East Team'
    },
    {
      name: 'Washington Commanders', 
      conference: 'nfc',
      logo: 'images/commanders.png',
      description: 'NFC East Team'
    },
    {
      name: 'New York Giants', 
      conference: 'nfc',
      logo: 'images/giants.jpg',
      description: 'NFC East Team'
    },
    {
      name: 'Atlanta Falcons', 
      conference: 'nfc',
      logo: 'images/falcons.jpg',
      description: 'NFC South Team'
    },
     {
      name: 'New Orlean Saints', 
      conference: 'nfc',
      logo: 'images/saints.jpg',
      description: 'NFC South Team'
    },
     {
      name: 'Tampa Bay Buccaneers', 
      conference: 'nfc',
      logo: 'images/buccaneers.webp',
      description: 'NFC South Team'
    },
     {
      name: 'Carolina Panthers', 
      conference: 'nfc',
      logo: 'images/panthers.webp',
      description: 'NFC South Team'
    },
     {
      name: 'Seattle Seahawks', 
      conference: 'nfc',
      logo: 'images/seahawks.webp',
      description: 'NFC West Team'
    },
     {
      name: 'Los Angelos Rams', 
      conference: 'nfc',
      logo: 'images/rams.webp',
      description: 'NFC West Team'
    },
    {
      name: 'San Francisco 49ers', 
      conference: 'nfc',
      logo: 'images/49ers.webp',
      description: 'NFC West Team'
    },
    {
      name: 'Arizona Cardinals', 
      conference: 'nfc',
      logo: 'images/cardinals.jpg',
      description: 'NFC West Team'
    },
    {
      name: 'Pittsburg Steelers', 
      conference: 'afc',
      logo: 'images/steelers.webp',
      description: 'AFC North Team'
    },
      {
      name: 'Cleveland Browns', 
      conference: 'afc',
      logo: 'images/browns.jpg',
      description: 'AFC North Team'
    },
      {
      name: 'Cincinatti Bengals', 
      conference: 'afc',
      logo: 'images/bengals.webp',
      description: 'AFC North Team'
    },
      {
      name: 'Baltimore Ravens', 
      conference: 'afc',
      logo: 'images/ravens.jpg',
      description: 'AFC North Team'
    },
      {
      name: 'Buffalo Bills', 
      conference: 'afc',
      logo: 'images/bills.jpg',
      description: 'AFC East Team'
    },
      {
      name: 'New England Patriots', 
      conference: 'afc',
      logo: 'images/patriots.jpg',
      description: 'AFC East Team'
    },
     {
      name: 'New York Jets', 
      conference: 'afc',
      logo: 'images/jets.webp',
      description: 'AFC East Team'
    },
     {
      name: 'Miami Dolphins', 
      conference: 'afc',
      logo: 'images/dolphins.jpg',
      description: 'AFC East Team'
    },
     {
      name: 'Jacksonville Jaguars', 
      conference: 'afc',
      logo: 'images/jaguars.webp',
      description: 'AFC South Team'
    },
     {
      name: 'Houston Texans', 
      conference: 'afc',
      logo: 'images/texans.webp',
      description: 'AFC South Team'
    },
     {
      name: 'Indianapolis Colts', 
      conference: 'afc',
      logo: 'images/colts.jpg',
      description: 'AFC South Team'
    },
     {
      name: 'Tennessee Titans', 
      conference: 'afc',
      logo: 'images/titans.png',
      description: 'AFC South Team'
    },
     {
      name: 'Kansas City Chiefs', 
      conference: 'afc',
      logo: 'images/chiefs.jpg',
      description: 'AFC West Team'
    },
     {
      name: 'Los Angelos Chargers', 
      conference: 'afc',
      logo: 'images/chargers.webp',
      description: 'AFC West Team'
    },
     {
      name: 'Denver Broncos', 
      conference: 'afc',
      logo: 'images/broncos.webp',
      description: 'AFC West Team'
    },
     {
      name: 'Las Vegas Raiders', 
      conference: 'afc',
      logo: 'images/raiders.jpg',
      description: 'AFC West Team'
    }
]

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const teamParam = params.get('team');

      this.team = this.teams.find(t => 
        t.name.toLowerCase().split(' ').join('-') === teamParam
      );
    });
  }
}
