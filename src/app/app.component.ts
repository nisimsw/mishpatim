import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MishpatimComponent} from './mishpatim/mishpatim.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MishpatimComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mishpati-test';
}
