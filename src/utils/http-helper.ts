import { HttpResponse } from "../models/http-response-model";

export const ok = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const noContent = async (message?: string): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null,
  };
};

export const deleted = async (): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: {
      message: "Has been deleted",
    },
  };
};

export const created = async (): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: {
      message: "successful",
    },
  };
};

export const badRequest = async (): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: null,
  };
};

export const updated = async (): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: "Has been updated",
  };
};
