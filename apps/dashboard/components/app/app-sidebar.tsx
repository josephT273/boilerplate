"use client";
import Link from "next/link";
import { ShieldCheck, Cpu, Activity, User2, ChevronUp } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavUser } from "./app-nav-user";

interface SidebarItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const sidebarItems: SidebarItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: ShieldCheck },
  { label: "Threat Monitor", href: "/monitor", icon: Activity },
  { label: "Binary Lab", href: "/lab", icon: Cpu },
  { label: "Leaderboard", href: "/leaderboard", icon: User2 },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar side="right" collapsible="icon" {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map(({ label, href, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  <SidebarMenuItem key={label} className="items-center flex">
                    <SidebarMenuButton asChild>
                      <Link
                        href={href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-4 text-sm font-medium transition-colors hover:bg-muted",
                          isActive && "bg-muted text-primary",
                        )}
                      >
                        <Icon className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm font-medium">{label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex">
        <SidebarTrigger title="Toggle Sidebar" />
        <NavUser
          name="HunterX"
          email="Hunter@sectopia.com"
          avatar="/avatars/shadcn.jpg"
        />
      </SidebarFooter>
    </Sidebar>
  );
}
