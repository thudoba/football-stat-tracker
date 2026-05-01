import { Injectable } from '@angular/core';

export interface Team {
  teamName: string;
  conference: 'NFC' | 'AFC';
  division: string;
  description: string;
  //logo?

  //put stats fields here
}

export interface Game {}

@Injectable({
  providedIn: 'root',
})
export class Data {
  teams = [
    {
      name: 'Minnesota Vikings',
      conference: 'nfc',
      logo: 'images/vikingslogo.webp',
      description:
        'An NFC North team that finished the 2025 season 9-8 ranking 3rd in their division. The Minnesota Vikings were established in 1960, they have 0 superbowls. Some notable players include Fran Tarkenton, Randy Moss, Ifeadi Odenigbo, Alan Page, Adrian Peterson, and Cris Carter.',
      schedule: 'https://www.vikings.com/schedule/',
      division: 'NFC North',
    },
    {
      name: 'Greenbay Packers',
      conference: 'nfc',
      logo: 'images/packers.webp',
      description:
        'An NFC North team that finished the 2025 season 9-7-1 ranking 2nd in their division. The Green Bay Packers were established in 1919, they have 4 Super Bowls. Some notable players include Brett Favre, Aaron Rodgers, Reggie White, Bart Starr, and Ray Nitschke.',
      schedule: 'https://www.packers.com/schedule/',
      division: 'NFC North',
    },
    {
      name: 'Chicago Bears',
      conference: 'nfc',
      logo: 'images/bears.jpg',
      description:
        'An NFC North team that finished the 2025 season 11-6 ranking 1st in their division. The Chicago Bears were established in 1919, they have 1 Super Bowl. Some notable players include Walter Payton, Mike Ditka, Brian Urlacher, Dick Butkus, and Gale Sayers.',
      schedule: 'https://www.chicagobears.com/schedule/',
      division: 'NFC North',
    },
    {
      name: 'Detroit Lions',
      conference: 'nfc',
      logo: 'images/lions.webp',
      description:
        'An NFC North team that finished the 2025 season 9-8 ranking 4th in their division. The Detroit Lions were established in 1930, they have 0 Super Bowls. Some notable players include Barry Sanders, Calvin Johnson, Matthew Stafford, Dick Lane, and Joe Schmidt.',
      schedule: 'https://www.detroitlions.com/schedule/',
      division: 'NFC North',
    },
    {
      name: 'Philadelphia Eagles',
      conference: 'nfc',
      logo: 'images/eagles.webp',
      description:
        'An NFC East team that finished the 2025 season 11-6 ranking 1st in their division. The Philadelphia Eagles were established in 1933, they have 1 Super Bowl. Some notable players include Reggie White, Brian Dawkins, Donovan McNabb, Chuck Bednarik, and Jason Kelce.',
      schedule: 'https://www.philadelphiaeagles.com/schedule/',
      division: 'NFC East',
    },
    {
      name: 'Dallas Cowboys',
      conference: 'nfc',
      logo: 'images/cowboys.webp',
      description:
        'An NFC East team that finished the 2025 season 7-9-1 ranking 2nd in their division. The Dallas Cowboys were established in 1960, they have 5 Super Bowls. Some notable players include Troy Aikman, Emmitt Smith, Michael Irvin, Roger Staubach, and Deion Sanders.',
      schedule: 'https://www.dallascowboys.com/schedule/',
      division: 'NFC East',
    },
    {
      name: 'Washington Commanders',
      conference: 'nfc',
      logo: 'images/commanders.png',
      description:
        'An NFC East team that finished the 2025 season 5-12 ranking 3rd in their division. The Washington Commanders were established in 1932, they have 3 Super Bowls. Some notable players include Joe Theismann, Darrell Green, Art Monk, John Riggins, and Sean Taylor.',
      schedule: 'https://www.commanders.com/schedule/',
      division: 'NFC East',
    },
    {
      name: 'New York Giants',
      conference: 'nfc',
      logo: 'images/giants.jpg',
      description:
        'An NFC East team that finished the 2025 season 4-13 ranking 4th in their division. The New York Giants were established in 1925, they have 4 Super Bowls. Some notable players include Lawrence Taylor, Eli Manning, Michael Strahan, Phil Simms, and Tiki Barber.',
      schedule: 'https://www.giants.com/schedule/',
      division: 'NFC East',
    },
    {
      name: 'Atlanta Falcons',
      conference: 'nfc',
      logo: 'images/falcons.jpg',
      description:
        'An NFC South team that finished the 2025 season 8-9 ranking 3rd in their division. The Atlanta Falcons were established in 1965, they have 0 Super Bowls. Some notable players include Matt Ryan, Julio Jones, Deion Sanders, Michael Vick, and Roddy White.',
      schedule: 'https://www.atlantafalcons.com/schedule/',
      division: 'NFC South',
    },
    {
      name: 'New Orlean Saints',
      conference: 'nfc',
      logo: 'images/saints.jpg',
      description:
        'An NFC South team that finished the 2025 season 6-11 ranking 4th in their division. The New Orleans Saints were established in 1967, they have 1 Super Bowl. Some notable players include Drew Brees, Rickey Jackson, Marques Colston, Alvin Kamara, and Cameron Jordan.',
      schedule: 'https://www.neworleanssaints.com/schedule/',
      division: 'NFC South',
    },
    {
      name: 'Tampa Bay Buccaneers',
      conference: 'nfc',
      logo: 'images/buccaneers.webp',
      description:
        'An NFC South team that finished the 2025 season 8-9 ranking 2nd in their division. The Tampa Bay Buccaneers were established in 1976, they have 2 Super Bowls. Some notable players include Tom Brady, Derrick Brooks, Warren Sapp, Mike Evans, and Ronde Barber.',
      schedule: 'https://www.buccaneers.com/schedule/',
      division: 'NFC South',
    },
    {
      name: 'Carolina Panthers',
      conference: 'nfc',
      logo: 'images/panthers.webp',
      description:
        'An NFC South team that finished the 2025 season 8-9 ranking 1st in their division. The Carolina Panthers were established in 1995, they have 0 Super Bowls. Some notable players include Cam Newton, Luke Kuechly, Steve Smith Sr., Julius Peppers, and Christian McCaffrey.',
      schedule: 'https://www.panthers.com/schedule/',
      division: 'NFC South',
    },
    {
      name: 'Seattle Seahawks',
      conference: 'nfc',
      logo: 'images/seahawks.webp',
      description:
        'An NFC West team that finished the 2025 season 14-3 ranking 1st in their division. The Seattle Seahawks were established in 1976, they have 2 Super Bowls and are your reigning Super Bowl Champions. Some notable players include Russell Wilson, Steve Largent, Walter Jones, Richard Sherman, and Marshawn Lynch.',
      schedule: 'https://www.seahawks.com/schedule/',
      division: 'NFC West',
    },
    {
      name: 'Los Angeles Rams',
      conference: 'nfc',
      logo: 'images/rams.webp',
      description:
        'An NFC West team that finished the 2025 season 12-5 ranking 2nd in their division. The Los Angeles Rams were established in 1936, they have 2 Super Bowls. Some notable players include Aaron Donald, Kurt Warner, Eric Dickerson, Marshall Faulk, and Deacon Jones.',
      schedule: 'https://www.rams.com/schedule/',
      division: 'NFC West',
    },
    {
      name: 'San Francisco 49ers',
      conference: 'nfc',
      logo: 'images/49ers.webp',
      description:
        'An NFC West team that finished the 2025 season 12-5 ranking 3rd in their division. The San Francisco 49ers were established in 1946, they have 5 Super Bowls. Some notable players include Joe Montana, Jerry Rice, Steve Young, Ronnie Lott, and Frank Gore.',
      schedule: 'https://www.49ers.com/schedule/',
      division: 'NFC West',
    },
    {
      name: 'Arizona Cardinals',
      conference: 'nfc',
      logo: 'images/cardinals.jpg',
      description:
        'An NFC West team that finished the 2025 season 3-14 ranking 4th in their division. The Arizona Cardinals were established in 1898, they have 0 Super Bowls. Some notable players include Larry Fitzgerald, Kurt Warner, Emmitt Smith, Aeneas Williams, and Patrick Peterson.',
      schedule: 'https://www.azcardinals.com/schedule/',
      division: 'NFC West',
    },
    {
      name: 'Pittsburgh Steelers',
      conference: 'afc',
      logo: 'images/steelers.webp',
      description:
        'An AFC North team that finished the 2025 season 10-7 ranking 1st in their division. The Pittsburgh Steelers were established in 1933, they have 6 Super Bowls. Some notable players include Terry Bradshaw, Franco Harris, Mean Joe Greene, Troy Polamalu, and Ben Roethlisberger.',
      schedule: 'https://www.steelers.com/schedule/',
      division: 'AFC North',
    },
    {
      name: 'Cleveland Browns',
      conference: 'afc',
      logo: 'images/browns.jpg',
      description:
        'An AFC North team that finished the 2025 season 5-12 ranking 4th in their division. The Cleveland Browns were established in 1946, they have 0 Super Bowls. Some notable players include Jim Brown, Otto Graham, Joe Thomas, Ozzie Newsome, and Nick Chubb.',
      schedule: 'https://www.clevelandbrowns.com/schedule/',
      division: 'AFC North',
    },
    {
      name: 'Cincinatti Bengals',
      conference: 'afc',
      logo: 'images/bengals.webp',
      description:
        'An AFC North team that finished the 2025 season 6-11 ranking 3rd in their division. The Cincinnati Bengals were established in 1968, they have 0 Super Bowls. Some notable players include Anthony Munoz, Boomer Esiason, Chad Johnson, Joe Burrow, and A.J. Green.',
      schedule: 'https://www.bengals.com/schedule/',
      division: 'AFC North',
    },
    {
      name: 'Baltimore Ravens',
      conference: 'afc',
      logo: 'images/ravens.jpg',
      description:
        'An AFC North team that finished the 2025 season 8-9 ranking 2nd in their division. The Baltimore Ravens were established in 1996, they have 2 Super Bowls. Some notable players include Ray Lewis, Ed Reed, Jonathan Ogden, Lamar Jackson, and Terrell Suggs.',
      schedule: 'https://www.baltimoreravens.com/schedule/',
      division: 'AFC North',
    },
    {
      name: 'Buffalo Bills',
      conference: 'afc',
      logo: 'images/bills.jpg',
      description:
        'An AFC East team that finished the 2025 season 12-5 ranking 2nd in their division. The Buffalo Bills were established in 1960, they have 0 Super Bowls. Some notable players include Jim Kelly, Thurman Thomas, Bruce Smith, Andre Reed, and Josh Allen.',
      schedule: 'https://www.buffalobills.com/schedule/',
      division: 'AFC East',
    },
    {
      name: 'New England Patriots',
      conference: 'afc',
      logo: 'images/patriots.jpg',
      description:
        'An AFC East team that finished the 2025 season 14-3 ranking 1st in their division. The New England Patriots were established in 1959, they have 6 Super Bowls. Some notable players include Tom Brady, Rob Gronkowski, Vince Wilfork, and Ty Law.',
      schedule: 'https://www.patriots.com/schedule/',
      division: 'AFC East',
    },
    {
      name: 'New York Jets',
      conference: 'afc',
      logo: 'images/jets.webp',
      description:
        'An AFC East team that finished the 2025 season 3-14 ranking 4th in their division. The New York Jets were established in 1959, they have 1 Super Bowl. Some notable players include Joe Namath, Curtis Martin, Darrelle Revis, Mark Gastineau, and Don Maynard.',
      schedule: 'https://www.newyorkjets.com/schedule/',
      division: 'AFC East',
    },
    {
      name: 'Miami Dolphins',
      conference: 'afc',
      logo: 'images/dolphins.jpg',
      description:
        'An AFC East team that finished the 2025 season 7-10 ranking 3rd in their division. The Miami Dolphins were established in 1966, they have 2 Super Bowls. Some notable players include Dan Marino, Larry Csonka, Jason Taylor, Zach Thomas, and Tyreek Hill.',
      schedule: 'https://www.dolphins.com/schedule/',
      division: 'AFC East',
    },
    {
      name: 'Jacksonville Jaguars',
      conference: 'afc',
      logo: 'images/jaguars.webp',
      description:
        'An AFC South team that finished the 2025 season 13-4 ranking 1st in their division. The Jacksonville Jaguars were established in 1995, they have 0 Super Bowls. Some notable players include Tony Boselli, Fred Taylor, Jimmy Smith, Maurice Jones-Drew, and Trevor Lawrence.',
      schedule: 'https://www.jaguars.com/schedule/',
      division: 'AFC South',
    },
    {
      name: 'Houston Texans',
      conference: 'afc',
      logo: 'images/texans.webp',
      description:
        'An AFC South team that finished the 2025 season 12-5 ranking 2nd in their division. The Houston Texans were established in 2002, they have 0 Super Bowls. Some notable players include J.J. Watt, Andre Johnson, Arian Foster, DeAndre Hopkins, and C.J. Stroud.',
      schedule: 'https://www.houstontexans.com/schedule/',
      division: 'AFC South',
    },
    {
      name: 'Indianapolis Colts',
      conference: 'afc',
      logo: 'images/colts.jpg',
      description:
        'An AFC South team that finished the 2025 season 8-9 ranking 3rd in their division. The Indianapolis Colts were established in 1953, they have 2 Super Bowls. Some notable players include Peyton Manning, Johnny Unitas, Edgerrin James, Ifeadi Odenigbo, Marvin Harrison, and Reggie Wayne.',
      schedule: 'https://www.colts.com/schedule/',
      division: 'AFC South',
    },
    {
      name: 'Tennessee Titans',
      conference: 'afc',
      logo: 'images/titans.png',
      description:
        'An AFC South team that finished the 2025 season 3-14 ranking 4th in their division. The Tennessee Titans were established in 1960, they have 0 Super Bowls. Some notable players include Earl Campbell, Steve McNair, Eddie George, Derrick Henry, and Bruce Matthews.',
      schedule: 'https://www.tennesseetitans.com/schedule/',
      division: 'AFC South',
    },
    {
      name: 'Kansas City Chiefs',
      conference: 'afc',
      logo: 'images/chiefs.jpg',
      description:
        'An AFC West team that finished the 2025 season 6-11 ranking 3rd in their division. The Kansas City Chiefs were established in 1960, they have 3 Super Bowls. Some notable players include Patrick Mahomes, Len Dawson, Tony Gonzalez, Derrick Thomas, and Travis Kelce.',
      schedule: 'https://www.chiefs.com/schedule/',
      division: 'AFC West',
    },
    {
      name: 'Los Angeles Chargers',
      conference: 'afc',
      logo: 'images/chargers.webp',
      description:
        'An AFC West team that finished the 2025 season 11-6 ranking 2nd in their division. The Los Angeles Chargers were established in 1960, they have 0 Super Bowls. Some notable players include LaDainian Tomlinson, Philip Rivers, Junior Seau, Kellen Winslow, and Antonio Gates.',
      schedule: 'https://www.chargers.com/schedule/',
      division: 'AFC West',
    },
    {
      name: 'Denver Broncos',
      conference: 'afc',
      logo: 'images/broncos.webp',
      description:
        'An AFC West team that finished the 2025 season 14-3 ranking 1st in their division. The Denver Broncos were established in 1960, they have 3 Super Bowls. Some notable players include John Elway, Peyton Manning, Terrell Davis, Von Miller, and Shannon Sharpe.',
      schedule: 'https://www.denverbroncos.com/schedule/',
      division: 'AFC West',
    },
    {
      name: 'Las Vegas Raiders',
      conference: 'afc',
      logo: 'images/raiders.jpg',
      description:
        'An AFC West team that finished the 2025 season 3-14 ranking 4th in their division. The Las Vegas Raiders were established in 1960, they have 3 Super Bowls. Some notable players include Bo Jackson, Marcus Allen, Howie Long, Ken Stabler, and Tim Brown.',
      schedule: 'https://www.raiders.com/schedule/',
      division: 'AFC West',
    },
  ];

  getTeams() {
    return this.teams;
  }
  getTeamsByConference(conference: string) {
    return this.teams.filter((t) => t.conference === conference);
  }

  getTeamByName(name: string) {
    return this.teams.find((t) => t.name.toLowerCase().trim().replace(/\s+/g, '-') === name);
  }
}
