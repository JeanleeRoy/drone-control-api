export interface Drone {
  uuid: string;
  name: string;
  description: string;
  brand: string;
  imageUri: string;
  registerByUser: string;
  users: string[];
  navigations: string[];
}
