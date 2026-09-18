import { StatisticsModel } from "./statistics-model";

export interface PlayerModel {
  id: number;
  name: string;
  club: string;
  position: string;
  nationality: string;
  statistics: StatisticsModel;
}
