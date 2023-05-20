import { NavigationRepository } from "../domain/navigation-repository";
import { PositionRepository } from "../domain/position-repository";

const makeNewPosition = (navigationId: string, command: string) => {
  return {
    uuid: "9d5c1479-ebf7-401d-843c-1ba1860c88b2",
    createdAt: new Date().toISOString(),
    navigation: navigationId,
    command: command,
    altitude: "",
    latitude: "",
    longitude: "",
    closedAt: "",
  };
};

const useProcessNavigationCommand =
  (
    navigationRepository: NavigationRepository,
    positionRepository: PositionRepository
  ) =>
  async (navigationId: string, command: string) => {
    console.log("[NavigationUseCases] useProcessNavigationCommand");
    const navigation = await navigationRepository.getNavigationById(
      navigationId
    );

    if (!navigation) {
      console.log("[NavigationUseCases] navigation not found");
      return null;
    }

    const new_position = await positionRepository.createPosition(
      makeNewPosition(navigationId, command)
    );

    navigation.positions.push(new_position.uuid);

    const new_navigation = await navigationRepository.updateNavigation(
      navigationId,
      navigation
    );

    console.log(
      "[NavigationUseCases] useProcessNavigationCommand end",
      new_navigation
    );

    return new_navigation;
  };

export { useProcessNavigationCommand };
