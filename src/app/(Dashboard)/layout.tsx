import Link from "next/link";
import { ReactNode } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  HomeIcon,
  CarIcon,
  CalendarIcon,
  UsersIcon,
  SettingsIcon,
  LogOutIcon,
  MenuIcon,
  SearchIcon,
  BellIcon,
  UserCircleIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Owner Dashboard – Carentara",
};

export default function OwnerLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar className="flex flex-col bg-gradient-to-b from-blue-800 to-blue-900 text-neutral-800">
          <SidebarHeader className="px-6 py-4 text-2xl font-bold">
            Roadstar
          </SidebarHeader>

          <SidebarSeparator />

          <SidebarContent className="flex-1 overflow-y-auto">
            <SidebarMenu>
              <SidebarMenuItem className="px-4 py-3 text-neutral-800 hover:bg-neutral-400 rounded">
                <Link href="/owner" className="flex items-center gap-3 w-full">
                  <HomeIcon className="w-5 h-5" /> Dashboard
                </Link>
              </SidebarMenuItem>

              <SidebarMenuItem className="px-4 py-3 text-neutral-800 hover:bg-neutral-400 rounded">
                <Link href="/owner/cars" className="flex items-center gap-3 w-full">
                  <CarIcon className="w-5 h-5" /> My Cars
                </Link>
              </SidebarMenuItem>

              <SidebarMenuItem className="px-4 py-3 text-neutral-800 hover:bg-neutral-400 rounded">
                <Link href="/owner/bookings" className="flex items-center gap-3 w-full">
                  <CalendarIcon className="w-5 h-5" /> Bookings
                </Link>
              </SidebarMenuItem>

              <SidebarMenuItem className="px-4 py-3 text-neutral-800 hover:bg-neutral-400 rounded">
                <Link href="/owner/customers" className="flex items-center gap-3 w-full">
                  <UsersIcon className="w-5 h-5" /> Customers
                </Link>
              </SidebarMenuItem>

              <SidebarMenuItem className="px-4 py-3 text-neutral-800 hover:bg-neutral-400 rounded">
                <Link href="/owner/settings" className="flex items-center gap-3 w-full">
                  <SettingsIcon className="w-5 h-5" /> Settings
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>

          <SidebarSeparator />

          <SidebarFooter className="px-6 py-4">
            <SidebarMenu>
              <SidebarMenuItem className="px-4 py-3 hover:bg-neutral-400 rounded">
                <button className="flex w-full items-center gap-3 text-left">
                  <LogOutIcon className="w-5 h-5" /> Log Out
                </button>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top bar with persistent toggle */}
          <header className="flex items-center justify-between bg-white px-6 py-3 border-b">
            <div className="flex items-center">
              <SidebarTrigger className="p-2 hover:bg-gray-100 rounded mr-4">
                <MenuIcon className="w-6 h-6 text-gray-600" />
              </SidebarTrigger>
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search cars, contacts..."
                  className="pl-10 w-64"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded">
                <BellIcon className="w-6 h-6 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <CalendarIcon className="w-6 h-6 text-gray-600" />
              </button>
              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                <UserCircleIcon className="w-8 h-8 text-gray-600" />
                <span className="text-gray-700">Jane Cooper</span>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
