import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// bei starten von routing (klicken auf Component) alert ausgeben lassen und bei ende von routing 

// über router ausgeben, wann es beginnt und wann es endet -->

// router modul anschauen 