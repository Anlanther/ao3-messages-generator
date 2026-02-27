import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { Message } from '../../models/message.model';
import { AppStore } from '../../store/app-store';
import { SenderMessageComponent } from '../sender-message/sender-message.component';

@Component({
  selector: 'app-messages-container',
  imports: [CommonModule, SenderMessageComponent],
  templateUrl: './messages-container.component.html',
  styleUrl: './messages-container.component.scss',
})
export class MessagesContainerComponent {
  stateService = inject(AppStore);

  messages$ = this.stateService.messages$;

  groupedMessages$ = this.messages$.pipe(
    map((messages) => {
      return messages.reduce((groups, message) => {
        if (groups.length === 0) {
          groups.push([message]);
          return groups;
        }
        const lastGroup = groups[groups.length - 1];
        const isNotSameRecipient =
          message.senderDetail.isReceiver !== lastGroup[0]?.senderDetail.isReceiver;

        if (isNotSameRecipient) {
          groups.push([message]);
        } else {
          lastGroup.push(message);
        }
        return groups;
      }, [] as Message[][]);
    }),
  );
}
