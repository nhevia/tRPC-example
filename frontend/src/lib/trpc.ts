// import router Type from server and hook it to a helper function
// This requires frontend having access to backend files (achiveable with
// a monorepo, fullstack framework or webpack module federation)
import { createReactQueryHooks } from "@trpc/react";
import { AppRouter } from "../../../server-api/server";

export const trpc = createReactQueryHooks<AppRouter>();
