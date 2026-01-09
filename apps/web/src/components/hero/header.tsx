'use client';

import { useEffect, useState } from 'react';

import { LogInIcon, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import {
  EyeIcon,
  GitBranchIcon,
  ClipboardListIcon,
  FilePlusIcon,
  SearchIcon,
  FileKeyIcon,
  AwardIcon,
  LockIcon,
  MapPinIcon,
  MegaphoneIcon
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';

import {
  HeroNavigation01,
  HeroNavigation01SmallScreen,
  type Navigation
} from '@/components/hero/navigation';

import { cn } from '@/lib/utils';

import Logo from '@/assets/logo';

const navigationData: Navigation[] = [
  {
    title: 'Profil',
    contentClassName: '!w-96',
    items: [
      {
        title: 'Visi & Misi',
        href: '#visi-misi',
        description: 'Tujuan dan arah kebijakan DUKCAPIL',
        icon: <EyeIcon className="size-4" />
      },
      {
        title: 'Struktur Organisasi',
        href: '#struktur-organisasi',
        description: 'Hierarki dan susunan organisasi',
        icon: <GitBranchIcon className="size-4" />
      }
    ]
  },
  {
    title: 'Layanan Publik',
    contentClassName: '!w-96',
    items: [
      {
        title: 'Pembuatan Dokumen',
        href: '#pembuatan-dokumen',
        description: 'Pembuatan KTP, KK, Akta, dan dokumen lainnya',
        icon: <FilePlusIcon className="size-4" />
      },
      {
        title: 'Mekanisme & Pengajuan',
        href: '#mekanisme',
        description: 'Tata cara dan persyaratan pengajuan',
        icon: <ClipboardListIcon className="size-4" />
      },
      {
        title: 'Status Permohonan',
        href: '#status-permohonan',
        description: 'Cek status dan tracking permohonan dokumen',
        icon: <SearchIcon className="size-4" />
      }
    ]
  },
  {
    title: 'SMKI & Keamanan',
    contentClassName: '!w-96',
    items: [
      {
        title: 'Kebijakan Privasi',
        href: '#kebijakan-privasi',
        description: 'Kebijakan perlindungan data pribadi',
        icon: <FileKeyIcon className="size-4" />
      },
      {
        title: 'Sertifikasi Keamanan',
        href: '#sertifikasi',
        description: 'Standar sertifikasi SMKI',
        icon: <AwardIcon className="size-4" />
      },
      {
        title: 'Keamanan Data Pribadi',
        href: '#keamanan-data',
        description: 'Perlindungan dan enkripsi data pribadi',
        icon: <LockIcon className="size-4" />
      }
    ]
  },
  {
    title: 'Kontak & Aduan',
    contentClassName: '!w-96',
    items: [
      {
        title: 'Lokasi Kantor',
        href: '#lokasi',
        description: 'Peta lokasi kantor DUKCAPIL',
        icon: <MapPinIcon className="size-4" />
      },
      {
        title: 'Whistleblowing System',
        href: '#wbs',
        description: 'Layanan pelaporan dan aduan',
        icon: <MegaphoneIcon className="size-4" />
      }
    ]
  }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 h-16 w-full border-b transition-all duration-300',
        {
          'bg-card/75 backdrop-blur': isScrolled
        }
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#">
          <Logo className="gap-3" />
        </a>

        {/* Navigation */}
        <HeroNavigation01 navigationData={navigationData} />

        {/* Actions */}
        <div className="flex gap-3">
          {/* Theme Toggle */}
          <Button
            size="icon"
            variant="outline"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            disabled={!mounted}
            aria-label="Toggle theme"
          >
            {mounted && theme === 'dark' ? (
              <SunIcon className="size-4" />
            ) : (
              <MoonIcon className="size-4" />
            )}
          </Button>

          <Button className="max-sm:hidden">
            <a href="#">Login</a>
          </Button>

          <Tooltip>
            <TooltipTrigger>
              <Button size="icon" className="sm:hidden">
                <a href="#">
                  <LogInIcon />
                  <span className="sr-only">Login</span>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Login</TooltipContent>
          </Tooltip>

          <HeroNavigation01SmallScreen navigationData={navigationData} />
        </div>
      </div>
    </header>
  );
};

export default Header;
