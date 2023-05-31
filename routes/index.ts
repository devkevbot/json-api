import { Router } from "express";
import {
  randomCompany,
  randomLoremIpsum,
  randomPerson,
} from "../services/index.js";

const STATUS_OK = 200;

const router = Router();

router.get("/person", (_req, res) => {
  res.status(STATUS_OK).json(randomPerson());
});

router.get("/company", (_req, res) => {
  res.status(STATUS_OK).json(randomCompany());
});

router.get("/lorem-ipsum", (_req, res) => {
  res.status(STATUS_OK).json(randomLoremIpsum());
});

export default router;
