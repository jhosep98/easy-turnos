import * as React from "react";
import { Outlet } from "react-router-dom";

import { AppSidebar } from "@/components/templates/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const RootLayout: React.FC = () => (
  <SidebarProvider>
    <AppSidebar />

    <SidebarInset>
      <Outlet />
    </SidebarInset>
  </SidebarProvider>
);
