import { setupServer } from "msw/node";
import { handlers } from "./handler";

//create mocking server
export const server = setupServer(...handlers);
