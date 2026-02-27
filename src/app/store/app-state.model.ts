import { ChatType } from '../models/chat-type.model';
import { Message } from '../models/message.model';

export interface AppState {
  messages: Message[];
  chatType: ChatType;
}
