import type { ReactNode } from 'react';

import {
  UserIcon,
  SettingsIcon,
  ShieldCheckIcon,
  UsersIcon,
  FileTextIcon,
  LogOutIcon
} from 'lucide-react';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

type Props = {
  trigger: ReactNode;
  defaultOpen?: boolean;
  align?: 'start' | 'center' | 'end';
};

const ProfileDropdown = ({ trigger, defaultOpen, align = 'end' }: Props) => {
  return (
    <DropdownMenu defaultOpen={defaultOpen} modal={false}>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align={align || 'end'}>
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex items-center gap-4 px-4 py-2.5 font-normal">
            <div className="relative">
              <Avatar className="size-10">
                <AvatarImage
                  src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png"
                  alt="John Doe"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="ring-card absolute right-0 bottom-0 block size-2 rounded-full bg-green-600 ring-2" />
            </div>
            <div className="flex flex-1 flex-col items-start">
              <span className="text-foreground text-base font-semibold">
                John Doe
              </span>
              <span className="text-muted-foreground text-xs">
                john.doe@example.com
              </span>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="px-4 py-2.5 text-sm">
          <UserIcon className="text-foreground size-4" />
          <span>Profil Saya</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="px-4 py-2.5 text-sm">
          <SettingsIcon className="text-foreground size-4" />
          <span>Pengaturan</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="px-4 py-2.5 text-sm">
          <ShieldCheckIcon className="text-foreground size-4" />
          <span>Keamanan Data</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="px-4 py-2.5 text-sm">
          <UsersIcon className="text-foreground size-4" />
          <span>Kelola Pengguna</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="px-4 py-2.5 text-sm">
          <FileTextIcon className="text-foreground size-4" />
          <span>Laporan Audit</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem variant="destructive" className="px-4 py-2.5 text-sm">
          <LogOutIcon className="size-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
