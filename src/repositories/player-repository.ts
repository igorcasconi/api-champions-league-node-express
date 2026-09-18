import { playersDatabase } from "../data/database";
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  const database = playersDatabase;

  return database;
};

export const findPlayerById = async (
  id: number,
): Promise<PlayerModel | undefined> => {
  const foundPlayer = playersDatabase.find((player) => player.id === id);

  return foundPlayer;
};

export const createPlayer = async (data: PlayerModel) => {
  playersDatabase.push(data);
};

export const deletePlayer = async (id: number) => {
  const foundPlayerIndex = playersDatabase.findIndex(
    (player) => player.id === id,
  );

  if (foundPlayerIndex !== -1) {
    playersDatabase.splice(foundPlayerIndex, 1);
    return true;
  }

  return false;
};

export const patchPlayer = async (id: number, body: StatisticsModel) => {
  const foundPlayerIndex = playersDatabase.findIndex(
    (player) => player.id === id,
  );

  if (foundPlayerIndex !== -1) {
    playersDatabase[foundPlayerIndex].statistics = body;
    return true;
  }

  return false;
};
