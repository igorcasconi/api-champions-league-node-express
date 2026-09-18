import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/player-repository";
import {
  badRequest,
  created,
  deleted,
  noContent,
  ok,
  updated,
} from "../utils/http-helper";

export const getListPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();
  let response = null;

  if (!!data.length) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await PlayerRepository.findPlayerById(id);
  let response = null;

  if (!!data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  if (Object.keys(player).length === 0) return await badRequest();

  await PlayerRepository.createPlayer(player);
  const response = await created();
  return response;
};

export const deletePlayerByIdService = async (id: number) => {
  const isDeletedPlayer = await PlayerRepository.deletePlayer(id);
  let response = null;

  if (isDeletedPlayer) {
    response = await deleted();
  } else {
    response = await badRequest();
  }

  return response;
};

export const patchPlayerByIdService = async (
  id: number,
  body: StatisticsModel,
) => {
  const isUpdatedPlayer = await PlayerRepository.patchPlayer(id, body);
  let response = null;

  if (isUpdatedPlayer) {
    response = await updated();
  } else {
    response = await badRequest();
  }

  return response;
};
