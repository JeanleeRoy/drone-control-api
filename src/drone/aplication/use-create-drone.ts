import { Drone } from "../domain/drone-entity";
import { DroneRepository } from "../domain/drone-repository";
import { v4 as uuid } from "uuid";

export interface CreateDroneProps {
  name: string;
  brand: string;
  registerByUser: string;
  description?: string;
  imageUri?: string;
}

const useCreateDrone =
  (droneRepository: DroneRepository) =>
  async ({
    name,
    description,
    brand,
    imageUri,
    registerByUser,
  }: CreateDroneProps): Promise<Drone> => {
    console.log("[DroneUseCases] createDrone");
    const drone: Drone = {
      name,
      description: description || "",
      brand,
      imageUri: imageUri || "",
      registerByUser,
      uuid: uuid(),
      users: [registerByUser],
      navigations: [],
    };
    const newDrone = await droneRepository.createDrone(drone);
    console.log("[DroneUseCases] createDrone end", newDrone);
    return newDrone;
  };

export { useCreateDrone };
