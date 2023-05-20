import { Position } from "./position";

export interface PositionRepository {
  createPosition: (Coordinate: Position) => Promise<Position>;
  getPositionById: (uuid: string) => Promise<Position | null>;
  updatePosition: (uuid: string, Coordinate: Position) => Promise<Position>;
  deletePosition: (uuid: string) => Promise<Position>;
  listPositionsByNavigationId: (navigationId: string) => Promise<Position[]>;
}
