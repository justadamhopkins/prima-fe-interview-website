import "@testing-library/jest-dom";

import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "../server/node.ts";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
