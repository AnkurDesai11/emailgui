import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private snack: MatSnackBar) { }
  btnClick() {
    console.log("button clicked");
    this.snack.open("Alright!", "hide", { duration: 1000, });
  }

}
