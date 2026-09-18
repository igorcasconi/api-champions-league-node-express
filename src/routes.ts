import { Router } from "express";
import * as PlayerController from "./controllers/player-controller";
import * as ClubController from "./controllers/club-controller";

const router = Router();

router.get("/players", PlayerController.getAllPlayers);
router.get("/players/:id", PlayerController.getPlayerById);
router.post("/players/create", PlayerController.postCreatePlayer);
router.delete("/players/:id", PlayerController.deletePlayerById);
router.patch("/players/:id", PlayerController.patchPlayerById);

router.get("/clubs", ClubController.getAllClubs);
router.get("/clubs/:id", ClubController.getClubById);
router.post("/clubs/create", ClubController.postCreateClub);
router.delete("/clubs/:id", ClubController.deleteClubById);
router.patch("/clubs/:id", ClubController.patchClubById);

export default router;
