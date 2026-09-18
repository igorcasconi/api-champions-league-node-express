import { ClubModel } from "../models/club-model";
import * as ClubRepository from "../repositories/club-repository";
import * as HttpHelper from "../utils/http-helper";

export const getListClubService = async () => {
  const data = await ClubRepository.findAllClubs();
  let response = null;

  if (!!data.length) {
    response = await HttpHelper.ok(data);
  } else {
    response = await HttpHelper.noContent();
  }

  return response;
};

export const getClubByIdService = async (id: number) => {
  const data = await ClubRepository.findClubById(id);
  let response = null;

  if (!!data) {
    response = await HttpHelper.ok(data);
  } else {
    response = await HttpHelper.noContent();
  }

  return response;
};

export const createClubService = async (club: ClubModel) => {
  if (Object.keys(club).length === 0) return await HttpHelper.badRequest();

  await ClubRepository.createClub(club);
  const response = await HttpHelper.created();
  return response;
};

export const deleteClubByIdService = async (id: number) => {
  const isDeletedClub = await ClubRepository.deleteClub(id);
  let response = null;

  if (isDeletedClub) {
    response = await HttpHelper.deleted();
  } else {
    response = await HttpHelper.badRequest();
  }

  return response;
};

export const patchClubByIdService = async (id: number, body: ClubModel) => {
  const isUpdatedClub = await ClubRepository.patchClub(id, body);
  let response = null;

  if (isUpdatedClub) {
    response = await HttpHelper.updated();
  } else {
    response = await HttpHelper.badRequest();
  }

  return response;
};
