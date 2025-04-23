import { createRouteHandler } from "uploadthing/next"; // <-- App Router uses /next
import { ourFileRouter } from "./core"; // <-- adjust this if file is somewhere else

// 👇 This exports the handlers for GET and POST
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
