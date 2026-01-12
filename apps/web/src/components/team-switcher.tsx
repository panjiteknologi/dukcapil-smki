import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import Logo from '@/assets/logo';

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg">
          {/* <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg overflow-hidden"> */}
          <Logo className="size-10" />
          {/* </div> */}
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-bold text-lg">Dukcapil SMKI</span>
            <span className="truncate text-xs">Kementrian Dalam Negeri</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
