import { DroneRepository } from "../domain/drone-repository";

const getDronById =
  (droneRepository: DroneRepository) => async (userId: string) => {
    console.log("[DroneUseCases] getDronByUserId");
    const drones = await droneRepository.getDroneById(userId);
    console.log("[DroneUseCases] getDronByUserId end", drones);
    return drones;
  };

export { getDronById };
