import { Message } from './message.model';

export interface ProcessedMessage extends Message {
  position: 'first' | 'middle' | 'last';
}
