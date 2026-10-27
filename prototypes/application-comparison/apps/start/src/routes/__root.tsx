import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import mantineStyles from "@mantine/core/styles.css?url";
import appStyles from "@creuza-prototype/ui/styles.css?url";
export const Route = createRootRoute({
  head: () => ({ meta: [{ title: "Creuza · TanStack Start · prototipo" }, { name: "viewport", content: "width=device-width, initial-scale=1" }], links: [{ rel: "stylesheet", href: mantineStyles }, { rel: "stylesheet", href: appStyles }] }),
  component: () => <html lang="it"><head><HeadContent /></head><body><Outlet /><Scripts /></body></html>
});
