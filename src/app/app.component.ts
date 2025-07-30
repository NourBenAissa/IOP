import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interop-v2';
  
   ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
}
