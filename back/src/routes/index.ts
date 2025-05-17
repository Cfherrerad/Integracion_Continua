import { Router } from "express";
import appointmentsRouter from "./appointmentsRouter";
import usersRouter from "./usersRouter";

const router = Router();

router.use("/appointments", appointmentsRouter)
router.use("/user", usersRouter)

export default router;