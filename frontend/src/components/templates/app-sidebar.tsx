import * as React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Calendar,
  Command,
  LayoutDashboard,
  Settings,
  Users,
  UserSearch,
} from "lucide-react";

import { PRIVATE_ROUTES } from "@/helpers/routes";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: PRIVATE_ROUTES.DASHBOARD,
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Customers",
      url: PRIVATE_ROUTES.CUSTOMERS,
      icon: Users,
      isActive: false,
    },
    {
      title: "Specialists",
      url: PRIVATE_ROUTES.SPECIALISTS,
      icon: UserSearch,
      isActive: false,
    },
    {
      title: "Appointments",
      url: PRIVATE_ROUTES.APPOINTMENTS,
      icon: Calendar,
      isActive: false,
    },
    {
      title: "Settings",
      url: PRIVATE_ROUTES.SETTINGS,
      icon: Settings,
      isActive: false,
    },
  ],
};

export const AppSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => (
  <Sidebar collapsible="icon" {...props}>
    <SidebarHeader className="h-16 items-center justify-center">
      <SidebarMenu>
        <SidebarMenuItem>
          <Link to={PRIVATE_ROUTES.HOME} className="flex items-center gap-2">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
              <Command className="size-4" />
            </div>

            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">Easy Turnos</span>
            </div>
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>

    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent className="px-1.5 md:px-0">
          <SidebarMenu className="flex flex-col gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <NavLink to={item.url}>
                  {({ isActive }) => (
                    <SidebarMenuButton isActive={isActive} tooltip={item.title}>
                      {item.icon && (
                        <item.icon
                          className={`${isActive && "text-primary"}`}
                        />
                      )}

                      <span className={`${isActive && "text-primary"}`}>
                        {item.title}
                      </span>
                    </SidebarMenuButton>
                  )}
                </NavLink>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
);
