import { DroneRepository } from "../domain/drone-repository";

const listDronesByUserId =
  (droneRepository: DroneRepository) => async (userId: string) => {
    console.log("[DroneUseCases] listDronesByUserId");
    const drones = await droneRepository.listDronesByUserId(userId);
    console.log("[DroneUseCases] listDronesByUserId end", drones);
    return drones;
  };

export { listDronesByUserId };
