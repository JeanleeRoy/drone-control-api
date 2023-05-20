import { Navigation } from "./navigation-entitty";

export interface NavigationRepository {
  createNavigation: (navigation: Navigation) => Promise<Navigation>;
  getNavigationById: (uuid: string) => Promise<Navigation | null>;
  updateNavigation: (
    uuid: string,
    navigation: Navigation
  ) => Promise<Navigation>;
  deleteNavigation: (uuid: string) => Promise<Navigation>;
  listNavigationsByUserId: (userId: string) => Promise<Navigation[]>;
  listNavigationsByDroneId: (droneId: string) => Promise<Navigation[]>;
  listNavigationsByUserIdAndDroneId: (
    userId: string,
    droneId: string
  ) => Promise<Navigation[]>;
}
