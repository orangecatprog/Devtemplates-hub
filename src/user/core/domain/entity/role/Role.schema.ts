import { z } from "zod";
import { Role } from "./Role";

export const RoleSchema = z.enum(Role);
