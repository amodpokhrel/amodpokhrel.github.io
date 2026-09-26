import { QueryClient, timeoutManager } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const isPrerendering =
  typeof process !== "undefined" && process.env["TSS_PRERENDERING"] === "true";

if (isPrerendering) {
  timeoutManager.setTimeoutProvider({
    setTimeout: (callback, delay) => {
      const timer = setTimeout(callback, delay);
      timer.unref?.();
      return timer;
    },
    clearTimeout: (timer) => clearTimeout(timer),
    setInterval: (callback, delay) => {
      const timer = setInterval(callback, delay);
      timer.unref?.();
      return timer;
    },
    clearInterval: (timer) => clearInterval(timer),
  });
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
