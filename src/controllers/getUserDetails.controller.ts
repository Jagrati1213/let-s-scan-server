import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { userCollection } from "../models/user.model";
import { ApiErrors } from "../utils/apiErrors";
import { ApiResponse } from "../utils/apiResponse";
import { CustomRequest } from "../types";

export const getUserDetails = asyncHandler(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    const exitsUser = await userCollection.findById(req.user?._id);
    if (!exitsUser)
      return res.json(
        new ApiErrors({
          statusCode: 400,
          statusText: "USER NOT EXITS!",
        })
      );
    return res.json(
      new ApiResponse({
        statusCode: 200,
        statusText: "USER EXITS",
        data: exitsUser,
      })
    );
  }
);
