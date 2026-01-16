import { userHandlers } from "@tests/server/handlers/users.ts";
import { setupWorker } from "msw/browser";

const handlers = [...userHandlers];

export const worker = setupWorker(...handlers);
