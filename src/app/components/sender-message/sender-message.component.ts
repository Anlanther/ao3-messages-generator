import { Component, computed, input, Signal } from '@angular/core';
import { Message } from '../../models/message.model';
import { ProcessedMessage } from '../../models/processed-message.model';

@Component({
  selector: 'app-sender-message',
  imports: [],
  templateUrl: './sender-message.component.html',
  styleUrl: './sender-message.component.scss',
})
export class SenderMessageComponent {
  messages = input.required<Message[]>();

  processedMessages: Signal<ProcessedMessage[]> = computed(() =>
    this.messages().map((message, index) => ({
      ...message,
      isLastMessage: index === this.messages().length - 1,
    })),
  );
}
