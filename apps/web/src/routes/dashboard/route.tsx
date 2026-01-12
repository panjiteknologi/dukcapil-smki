import { createFileRoute, Outlet } from '@tanstack/react-router';

import { AppSidebar } from '@/components/app-sidebar';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar';
import ProfileDropdown from '@/components/dropdown-profile';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SearchDialog from '@/components/dialog-search';
import { SearchIcon } from 'lucide-react';

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout
});

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-card sticky top-0 z-50 border-b">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 sm:px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="[&_svg]:size-5!" />
              <Separator
                orientation="vertical"
                className="hidden h-6! sm:block"
              />
              <SearchDialog
                trigger={
                  <>
                    <Button
                      variant="ghost"
                      className="hidden bg-transparent! px-1 py-0 font-normal sm:block"
                    >
                      <div className="text-muted-foreground hidden items-center gap-1.5 text-sm sm:flex">
                        <SearchIcon />
                        <span>Type to search...</span>
                      </div>
                    </Button>
                    <Button variant="ghost" size="icon" className="sm:hidden">
                      <SearchIcon />
                      <span className="sr-only">Search</span>
                    </Button>
                  </>
                }
              />
            </div>
            <div className="flex items-center gap-1.5">
              {/* <NotificationDropdown
                  trigger={
                    <Button variant='ghost' size='icon' className='relative'>
                      <BellIcon />
                      <span className='bg-destructive absolute top-2 right-2.5 size-2 rounded-full' />
                    </Button>
                  }
                /> */}
              <ProfileDropdown
                trigger={
                  <Button
                    variant="ghost"
                    className="h-full p-0 font-normal sm:pr-1"
                  >
                    <Avatar className="size-9.5 rounded-md">
                      <AvatarImage src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="hidden flex-col items-start gap-0.5 sm:flex md:max-lg:hidden">
                      <span className="text-sm font-medium">John Doe</span>
                      <span className="text-muted-foreground text-xs">
                        Admin
                      </span>
                    </div>
                  </Button>
                }
              />
            </div>
          </div>
        </header>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
