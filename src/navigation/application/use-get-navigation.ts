import { Position } from "../domain/position";
import { PositionRepository } from "../domain/position-repository";
import { Navigation } from "../domain/navigation-entitty";
import { NavigationRepository } from "../domain/navigation-repository";

export type NavigationDetail = Omit<Navigation, "positions"> & {
  positions: Position[];
};

const useGetNavigationById =
  (
    navigationRepository: NavigationRepository,
    positionRepository: PositionRepository
  ) =>
  async (navigationId: string) => {
    console.log("[NavigationUseCases] useGetNavigationById");
    const navigation = await navigationRepository.getNavigationById(
      navigationId
    );
    const positions =
      await positionRepository.listPositionsByNavigationId(navigationId);
    const navigationDetail = {
      ...navigation,
      positions,
    } as NavigationDetail;
    console.log("[NavigationUseCases] useGetNavigationById end", navigationDetail);
    return navigationDetail;
  };

export { useGetNavigationById };
