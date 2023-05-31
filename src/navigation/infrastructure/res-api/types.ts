export interface NewCommandRequest {
  command: string;
  test?: boolean;
  // navigationId: string;
}

export interface NewCommandResponse {
  respondedAt: string;
  position: string;
  navigation: string;
  command: string;
}
