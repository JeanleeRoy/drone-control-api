import { Navigation } from "../domain/navigation-entitty";
import { NavigationRepository } from "../domain/navigation-repository";
import { v4 as uuid } from "uuid";

export interface CreateNavigationProps {
  drone_id: string;
  user_id: string;
  is_active?: boolean;
  name?: string;
  is_public?: boolean;
}

const useCreateNavigation =
  (navigationRepository: NavigationRepository) =>
  async (payload: CreateNavigationProps) => {
    console.log("[NavigationUseCases] useCreateNavigation");

    const navigation: Navigation = {
      uuid: uuid(),
      name: payload.name || "New navigation",
      createdAt: new Date().toISOString(),
      drone: payload.drone_id,
      user: payload.user_id,
      is_public: payload.is_public || false,
      is_active: payload.is_active !== undefined ? payload.is_active : true,
      positions: [],
    };
    const new_navigation = await navigationRepository.createNavigation(
      navigation
    );

    console.log("[NavigationUseCases] useCreateNavigation end", new_navigation);
    return new_navigation;
  };

export { useCreateNavigation };
