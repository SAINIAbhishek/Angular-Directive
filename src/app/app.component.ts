import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  evenNumber = [2,4,6,8];
  oddNumber = [1,3,5,7];
  defaultNumber:boolean = true;
  value = '';
}
