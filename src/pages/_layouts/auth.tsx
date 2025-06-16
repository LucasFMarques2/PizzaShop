import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-2">
      <div className="h-full border-r border-foreground55 ng-muted p-10 text-muted-foreground"></div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
