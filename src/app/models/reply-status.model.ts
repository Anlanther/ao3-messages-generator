export type ReplyStatus = HasReply | NoReply;

export interface HasReply {
  hasReply: true;
  senderName: string;
  nameColour: string;
}

export interface NoReply {
  hasReply: false;
}
