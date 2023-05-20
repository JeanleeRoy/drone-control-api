import { NavigationRepository } from "../domain/navigation-repository";
import { PositionRepository } from "../domain/position-repository";

export interface UpdateNavigationPositionProps {
  navigation_id: string;
  position_id: string;
  location: {
    latitude: string;
    longitude: string;
    altitude: string;
  };
}

const useDefineNavigationPosition =
  (
    navigationRepository: NavigationRepository,
    positionRepository: PositionRepository
  ) =>
  async (payload: UpdateNavigationPositionProps) => {
    console.log("[NavigationUseCases] useUpdateNavigationPosition");

    const navigation = await navigationRepository.getNavigationById(
      payload.navigation_id
    );

    if (!navigation) {
      console.log("[NavigationUseCases] navigation not found");
      return null;
    }

    const position = await positionRepository.getPositionById(
      payload.position_id
    );

    if (!position) {
      console.log("[NavigationUseCases] position not found");
      return null;
    }

    position.latitude = payload.location.latitude;
    position.longitude = payload.location.longitude;
    position.altitude = payload.location.altitude;
    position.closedAt = new Date().toISOString();

    const new_position = await positionRepository.updatePosition(
      payload.position_id,
      position
    );

    console.log(
      "[NavigationUseCases] useUpdateNavigationPosition end",
      new_position
    );

    return new_position;
  };

export { useDefineNavigationPosition };
