import { Component } from '@angular/core';
import { MessagesContainerComponent } from './components/messages-container/messages-container.component';

@Component({
  selector: 'app-root',
  imports: [MessagesContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
