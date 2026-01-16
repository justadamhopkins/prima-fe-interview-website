import { MOCK_USERS } from "@constants/fixtures/users.ts";
import type { TRoleType } from "@constants/roles.ts";
import { filterUsers } from "@helpers/users.ts";
import { delay, HttpResponse, http } from "msw";

export const userHandlers = [
  http.get("https://api.prima.com/users", async ({ request }) => {
    const url = new URL(request.url);

    const search = url.searchParams.get("search");
    const roles = url.searchParams.getAll("roles") as TRoleType[];

    if (!search) {
      return new HttpResponse({ ok: false, error: "BAD_REQUEST" }, { status: 400 });
    }

    await delay();
    return HttpResponse.json({ ok: true, data: filterUsers(MOCK_USERS, search, roles) });
  }),
];
