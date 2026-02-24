import { Outlet, Scripts } from "@remix-run/react";

export default function App() {
  return (
    <>
      <Outlet />
      <Scripts />
    </>
  );
}
