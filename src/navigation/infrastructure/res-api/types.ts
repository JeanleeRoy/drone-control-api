export interface NewCommandRequest {
  command: string;
  navigationId: string;
}

export interface NewCommandResponse {
  uuid: string;
  createdAt: string;
  navigation: string;
  command: string;
}
