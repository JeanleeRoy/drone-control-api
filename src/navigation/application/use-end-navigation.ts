import { NavigationRepository } from "../domain/navigation-repository";

const useEndNavigation = (navigationRepository: NavigationRepository) => {
  return async (navigationId: string) => {
    console.log("[NavigationUseCases] useEndNavigation");

    const navigation = await navigationRepository.getNavigationById(
      navigationId
    );

    if (!navigation) {
      console.log("[NavigationUseCases] navigation not found");
      return null;
    }

    navigation.is_active = false;
    const new_navigation = await navigationRepository.updateNavigation(
      navigation.uuid,
      navigation
    );

    console.log("[NavigationUseCases] useEndNavigation end", new_navigation);
    return navigation;
  };
};

export { useEndNavigation };
