import { z } from "zod";

const UserSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 character(s)"),
  email: z.string().email("Please enter valid Email Address "),
});

export default UserSchema;
