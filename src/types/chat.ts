import { Message as AIMessage } from 'ai';

export interface CustomMessage extends AIMessage {
  timestamp?: string; 
}