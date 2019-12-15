import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  battingInfo = { info: 'Match Stats'};
  batsmansScores = [
    
  { name: 'Majid Zubair', team: 'Tigers Pro', match: 11, ins: 11, no: 4, score: 650, balls: 391, hs: 94, hundreds: 0 },
  { name: 'Sai Gautam', team: 'Chargers', match: 11, ins: 11, no: 2, score: 500, balls: 288, hs: 97, hundreds: 0 },
  { name: 'Prabburam Jagadeesan', team: 'Gladiators', match: 13, ins: 12, no: 6, score: 486, balls: 371, hs: 104, hundreds: 1 },
  { name: 'Zubair Hussain', team: 'Lions', match: 15, ins: 15, no: 1, score: 484, balls: 400, hs: 78, hundreds: 0 },
  { name: 'Pavan Kumar', team: 'Lagan', match: 14, ins: 13, no: 1, score: 419, balls: 314, hs: 106, hundreds: 1 },
  { name: 'Naveen Surya', team: 'Gladiators', match: 8, ins: 8, no: 0, score: 411, balls: 206, hs: 132, hundreds: 2 },
  { name: 'Niket Kumar', team: 'Lions', match: 7, ins: 7, no: 2, score: 400, balls: 243, hs: 121, hundreds: 1 },
  
  ];
   ​
  
  constructor() {}
  
  ​
  ngOnInit() {}
  
  }