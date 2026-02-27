import { MessageStatus } from '../constants/message-status.enum';
import { NameColour } from '../constants/name-colour.enum';
import { AppState } from './app-state.model';

export const initialState: AppState = {
  messages: [
    {
      replyStatus: {
        hasReply: false,
      },
      timestamp: 1232123,
      content: 'Hello, how are you?',
      senderDetail: {
        isReceiver: false,
        senderName: 'John Doe',
        senderImageUrl: 'https://example.com/john-doe.jpg',
        nameColour: NameColour.Blue,
      },
      reactions: [],
    },
    {
      replyStatus: {
        hasReply: false,
      },
      timestamp: 1232123,
      content: 'It has been a while since we last talked.',
      senderDetail: {
        isReceiver: false,
        senderName: 'John Doe',
        senderImageUrl: 'https://example.com/john-doe.jpg',
        nameColour: NameColour.Blue,
      },
      reactions: [],
    },
    {
      replyStatus: {
        hasReply: false,
      },
      timestamp: 1232123,
      content: 'Hiii!',
      senderDetail: {
        isReceiver: true,
        status: MessageStatus.Delivered,
      },
      reactions: [],
    },
  ],
  chatType: {
    isGroup: false,
    lastSeen: 'Last seen today at 12:00 PM',
    recipientName: 'John Doe',
  },
};
