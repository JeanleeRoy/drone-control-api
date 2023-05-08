import { Request, Response, Router } from "express";
import { validator } from "../middleware/validate-request";
import { getUserSchema } from "../validators/user.validator";
import { getUser } from "../services/user.service";

const router = Router();

router.get(
  "/user/get-user",
  validator(getUserSchema),
  async (req: Request, res: Response) => {
    const { uuid } = req.body;
    const user = getUser(uuid);
    res.json(user);
  }
);

export default router;
