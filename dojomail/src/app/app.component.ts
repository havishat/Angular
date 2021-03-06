import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [ {email: 'bill@gates.com', important: true, subject: 'New Windows', content: 'Windows XI will launch in 2100.'},
              {email: 'ada@loveLace.com', important: true, subject: 'Programming', content: 'Echantress of Numbers.'}, 
              {email: 'john@cArmac.com', important: false, subject: 'Updated Algo', content: 'New Algorithm for shadow volumes.'}, 
              {email: 'GAbe@gates.com', important: false, subject: 'HL3!', content: 'Just kidding...'} ]}
