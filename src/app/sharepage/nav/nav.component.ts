import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isShow:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  showList(){
    this.isShow=!this.isShow;
    console.log(this.isShow);
  }

}
