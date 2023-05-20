import { PositionRepository } from "../domain/position-repository";

const useGetNavigationPosition = (positionRepository: PositionRepository) => {
  return async (position_id: string) => {
    console.log("[NavigationUseCases] useGetNavigationPosition");

    const position = await positionRepository.getPositionById(position_id);

    console.log("[NavigationUseCases] useGetNavigationPosition end", position);

    return position;
  };
};

export { useGetNavigationPosition };
