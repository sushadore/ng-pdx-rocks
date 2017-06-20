import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
    outdoorPath = 'https://portlandrockgym.com/localcrags/';
    prgPath =  'https://portlandrockgym.com/';
    circuitPath = 'https://www.thecircuitgym.com/';
    psuPath = 'https://www.pdx.edu/recreation/outdoor-program#ClimbingCenter'
    planetGranitePath = 'https://planetgranite.com/';
    macPath = 'https://themac.com/facilities';
}
