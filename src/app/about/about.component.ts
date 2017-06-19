import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
    outdoorPath: string = "https://portlandrockgym.com/localcrags/";
    prgPath: string =  "https://portlandrockgym.com/";
    circuitPath: string = "https://www.thecircuitgym.com/";
    psuPath: string = "https://www.pdx.edu/recreation/outdoor-program#ClimbingCenter"
    planetGranitePath: string = "https://planetgranite.com/";
    macPath: string = "https://themac.com/facilities";
}
