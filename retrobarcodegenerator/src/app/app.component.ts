import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Retro Barcode Generator";
  colors = ["red","pink","grey","blue","green","yellow"];

  anycolor (x) {
    var array = x;
    var randColors = []
    for (let i in array) {
      var randomNumberBetween0and6 = Math.floor(Math.random() * 6);
      randColors.push(array[randomNumberBetween0and6])
    }
    return randColors;
  } 
}
