import { createFileRoute } from "@tanstack/react-router";
import { PrototypeApplication } from "@creuza-prototype/ui";
export const Route = createFileRoute("/")({ validateSearch: (search) => search, component: () => <PrototypeApplication variant="TanStack Start" /> });
