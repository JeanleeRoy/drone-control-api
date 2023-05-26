import { NavigationRepository } from "../domain/navigation-repository";
import { PositionRepository } from "../domain/position-repository";
import { Position } from "../domain/position";
import { v4 as uuid } from "uuid";

const makeNewPosition = (navigationId: string, command: string) => {
  return {
    uuid: uuid(),
    createdAt: new Date().toISOString(),
    navigation: navigationId,
    command: command,
    altitude: "",
    latitude: "",
    longitude: "",
    updatedAt: new Date().toISOString(),
    status: "pending",
  } as Position;
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
