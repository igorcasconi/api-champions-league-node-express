import { Request, Response } from "express";
import * as PlayerServices from "../services/player-service";
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

export const getAllPlayers = async (request: Request, response: Response) => {
  const playerResponse = await PlayerServices.getListPlayerService();

  response.status(playerResponse.statusCode).json(playerResponse.body);
};

export const getPlayerById = async (request: Request, response: Response) => {
  const id = Number(request.params.id);
  const playerResponse = await PlayerServices.getPlayerByIdService(id);

  response.status(playerResponse.statusCode).json(playerResponse.body);
};

export const postCreatePlayer = async (
  request: Request,
  response: Response,
) => {
  const data: PlayerModel = request.body;
  const playerResponse = await PlayerServices.createPlayerService(data);

  response.status(playerResponse.statusCode).json(playerResponse.body);
};

export const deletePlayerById = async (
  request: Request,
  response: Response,
) => {
  const id = Number(request.params.id);
  const playerResponse = await PlayerServices.deletePlayerByIdService(id);

  response.status(playerResponse.statusCode).json(playerResponse.body);
};

export const patchPlayerById = async (request: Request, response: Response) => {
  const id = Number(request.params.id);
  const body: StatisticsModel = request.body;
  const playerResponse = await PlayerServices.patchPlayerByIdService(id, body);

  response.status(playerResponse.statusCode).json(playerResponse.body);
};
