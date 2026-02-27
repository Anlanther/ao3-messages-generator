import { CommonModule } from '@angular/common';
import { Component, computed, input, Signal } from '@angular/core';
import { Message } from '../../models/message.model';
import { ProcessedMessage } from '../../models/processed-message.model';

@Component({
  selector: 'app-sender-message',
  imports: [CommonModule],
  templateUrl: './sender-message.component.html',
  styleUrl: './sender-message.component.scss',
})
export class SenderMessageComponent {
  messages = input.required<Message[]>();

  processedMessages: Signal<ProcessedMessage[]> = computed(() =>
    this.messages().map((message, index) => ({
      ...message,
      position: index === 0 ? 'first' : index === this.messages().length - 1 ? 'last' : 'middle',
    })),
  );
}
