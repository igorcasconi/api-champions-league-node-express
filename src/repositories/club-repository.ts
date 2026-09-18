import { clubsDatabase } from "../data/database";
import { ClubModel } from "../models/club-model";

export const findAllClubs = async (): Promise<ClubModel[]> => {
  const database = clubsDatabase;

  return database;
};

export const findClubById = async (
  id: number,
): Promise<ClubModel | undefined> => {
  const foundClub = clubsDatabase.find((club) => club.id === id);

  return foundClub;
};

export const createClub = async (data: ClubModel) => {
  clubsDatabase.push(data);
};

export const deleteClub = async (id: number) => {
  const foundClubIndex = clubsDatabase.findIndex((club) => club.id === id);

  if (foundClubIndex !== -1) {
    clubsDatabase.splice(foundClubIndex, 1);
    return true;
  }

  return false;
};

export const patchClub = async (id: number, body: ClubModel) => {
  const foundClubIndex = clubsDatabase.findIndex((club) => club.id === id);

  if (foundClubIndex !== -1) {
    clubsDatabase[foundClubIndex] = body;
    return true;
  }

  return false;
};
