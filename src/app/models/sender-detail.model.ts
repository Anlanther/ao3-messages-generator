import { MessageStatus } from '../constants/message-status.enum';
import { NameColour } from '../constants/name-colour.enum';

export type SenderDetail = IsReceiver | IsSender;

export interface IsReceiver {
  isReceiver: true;
  status: MessageStatus;
}

export interface IsSender {
  isReceiver: false;
  senderName: string;
  senderImageUrl: string;
  nameColour: NameColour;
}
