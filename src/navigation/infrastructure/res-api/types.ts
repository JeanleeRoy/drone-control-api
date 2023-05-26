export interface NewCommandRequest {
  command: string;
  navigationId: string;
}

export interface NewCommandResponse {
  respondedAt: string;
  position: string;
  navigation: string;
  command: string;
}
