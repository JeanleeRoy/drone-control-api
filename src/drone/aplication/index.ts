import { DroneRepository } from "../domain/drone-repository";
import { useCreateDrone } from "./use-create-drone";
import { getDronById } from "./use-get-by-id";
import { listDronesByUserId } from "./use-list-by-user-id";

export class DroneUseCases {
  constructor(private readonly repository: DroneRepository) {}
  createDrone = useCreateDrone(this.repository);
  getDroneById = getDronById(this.repository);
  listDronesByUserId = listDronesByUserId(this.repository);
  // listUsers = useListUsers(this.repository);
}
