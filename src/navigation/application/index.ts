import { DroneRepository } from "~/drone/domain/drone-repository";
import { PositionRepository } from "../domain/position-repository";
import { NavigationRepository } from "../domain/navigation-repository";
import { useCreateNavigation } from "./use-create-navigation";
import { useGetNavigationById } from "./use-get-navigation";
import {
  useListNavigationsByDroneId,
  useListNavigationsByUserId,
  useListNavigationsByUserIdAndDroneId,
} from "./use-list-navigations";
import { useProcessNavigationCommand } from "./use-process-navigation-command";
import { useDefineNavigationPosition } from "./use-define-navigation-position";
import { useGetNavigationPosition } from "./use-get-navigation-position";

export class NavigationUseCases {
  constructor(
    private readonly navigationRepository: NavigationRepository,
    private readonly positionRepository: PositionRepository
  ) {}
  createNavigation = useCreateNavigation(this.navigationRepository);
  getNavigationById = useGetNavigationById(
    this.navigationRepository,
    this.positionRepository
  );
  lsitNavigationsByDroneId = useListNavigationsByDroneId(
    this.navigationRepository
  );
  listNavigationsByUserId = useListNavigationsByUserId(
    this.navigationRepository
  );
  listNavigationsByUseAndDrone = useListNavigationsByUserIdAndDroneId(
    this.navigationRepository
  );
  processNavigationComand = useProcessNavigationCommand(
    this.navigationRepository,
    this.positionRepository
  );
  defineNavigationPosition = useDefineNavigationPosition(
    this.navigationRepository,
    this.positionRepository
  );
  getNavigationPosition = useGetNavigationPosition(this.positionRepository);
}
