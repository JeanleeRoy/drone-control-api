import { NavigationRepository } from "../domain/navigation-repository";

const useListNavigationsByDroneId =
  (navigationRepository: NavigationRepository) => async (droneId: string) => {
    console.log("[NavigationUseCases] useGetNavigationByDroneId");
    const navigation = await navigationRepository.listNavigationsByDroneId(
      droneId
    );
    console.log(
      "[NavigationUseCases] useGetNavigationByDroneId end",
      navigation
    );
    return navigation;
  };

const useListNavigationsByUserId =
  (navigationRepository: NavigationRepository) => async (userId: string) => {
    console.log("[NavigationUseCases] useGetNavigationByUserId");
    const navigation = await navigationRepository.listNavigationsByUserId(
      userId
    );
    console.log(
      "[NavigationUseCases] useGetNavigationByUserId end",
      navigation
    );
    return navigation;
  };

const useListNavigationsByUserIdAndDroneId =
  (navigationRepository: NavigationRepository) =>
  async (userId: string, droneId: string) => {
    console.log("[NavigationUseCases] useGetNavigationByUserIdAndDroneId");
    const navigation =
      await navigationRepository.listNavigationsByUserIdAndDroneId(
        userId,
        droneId
      );
    console.log(
      "[NavigationUseCases] useGetNavigationByUserIdAndDroneId end",
      navigation
    );
    return navigation;
  };

export {
  useListNavigationsByDroneId,
  useListNavigationsByUserId,
  useListNavigationsByUserIdAndDroneId,
};
