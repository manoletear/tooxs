import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/industrias")({
  component: () => <Outlet />,
});
