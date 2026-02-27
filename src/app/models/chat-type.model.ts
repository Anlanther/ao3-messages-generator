export type ChatType = IsGroup | IsDirect;

export interface IsGroup {
  isGroup: true;
  groupName: string;
  recipients: string;
}

export interface IsDirect {
  isGroup: false;
  recipientName: string;
  lastSeen: string;
}
