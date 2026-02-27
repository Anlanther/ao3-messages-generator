import { Message } from './message.model';

export interface ProcessedMessage extends Message {
  isLastMessage: boolean;
}
