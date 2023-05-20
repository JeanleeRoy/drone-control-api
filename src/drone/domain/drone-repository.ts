import { Drone } from "./drone-entity";

export interface DroneRepository {
  createDrone(drone: Drone): Promise<Drone>;
  getDroneById(uuid: string): Promise<Drone | null>;
  updateDrone(uuid: string, drone: Drone): Promise<Drone>;
  deleteDrone(uuid: string): Promise<Drone>;
  listDronesByUserId(userId: string): Promise<Drone[]>;
}
