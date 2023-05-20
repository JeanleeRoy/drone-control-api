import { Drone } from "../domain/drone-entity";
import { DroneRepository } from "../domain/drone-repository";

export interface CreateDroneProps {
  name: string;
  brand: string;
  registerByUser: string;
  description?: string;
  image_uri?: string;
}

const useCreateDrone =
  (droneRepository: DroneRepository) =>
  async ({
    name,
    description,
    brand,
    image_uri,
    registerByUser,
  }: CreateDroneProps): Promise<Drone> => {
    console.log("[DroneUseCases] createDrone");
    const drone: Drone = {
      name,
      description: description || "",
      brand,
      imageUri: image_uri || "",
      registerByUser,
      uuid: "c0ce5ac4-ed4c-11ed-a05b-0242ac120003",
      users: [registerByUser],
      navigations: [],
    };
    const newDrone = await droneRepository.createDrone(drone);
    console.log("[DroneUseCases] createDrone end", newDrone);
    return newDrone;
  };

export { useCreateDrone };
