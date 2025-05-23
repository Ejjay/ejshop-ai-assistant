import { Message as AIMessage } from 'ai';

// Extend the base Message type with our custom properties
export interface CustomMessage extends AIMessage {
  timestamp?: string;
}