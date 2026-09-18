import { Request, Response } from "express";
import * as ClubServices from "../services/club-service";
import { ClubModel } from "../models/club-model";

export const getAllClubs = async (request: Request, response: Response) => {
  const clubResponse = await ClubServices.getListClubService();

  response.status(clubResponse.statusCode).json(clubResponse.body);
};

export const getClubById = async (request: Request, response: Response) => {
  const id = Number(request.params.id);
  const clubResponse = await ClubServices.getClubByIdService(id);

  response.status(clubResponse.statusCode).json(clubResponse.body);
};

export const postCreateClub = async (request: Request, response: Response) => {
  const data: ClubModel = request.body;
  const clubResponse = await ClubServices.createClubService(data);

  response.status(clubResponse.statusCode).json(clubResponse.body);
};

export const deleteClubById = async (request: Request, response: Response) => {
  const id = Number(request.params.id);
  const clubResponse = await ClubServices.deleteClubByIdService(id);

  response.status(clubResponse.statusCode).json(clubResponse.body);
};

export const patchClubById = async (request: Request, response: Response) => {
  const id = Number(request.params.id);
  const body: ClubModel = request.body;
  const clubResponse = await ClubServices.patchClubByIdService(id, body);

  response.status(clubResponse.statusCode).json(clubResponse.body);
};
