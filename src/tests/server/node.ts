import { userHandlers } from "@tests/server/handlers/users.ts";
import { setupServer } from "msw/node";

const handlers = [...userHandlers];

export const server = setupServer(...handlers);
