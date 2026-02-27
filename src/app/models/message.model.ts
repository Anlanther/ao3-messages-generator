import { Reactions } from '../constants/reactions.enum';
import { ReplyStatus } from './reply-status.model';
import { SenderDetail } from './sender-detail.model';

export interface Message {
  replyStatus: ReplyStatus;
  timestamp: string;
  content: string;
  senderDetail: SenderDetail;
  reactions: Reactions[];
}
