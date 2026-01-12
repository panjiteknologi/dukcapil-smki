'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';

import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList
} from '@/components/ui/command';

type Props = {
  trigger: ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

const SearchDialog = ({ defaultOpen = false, trigger, className }: Props) => {
  const [open, setOpen] = useState(defaultOpen);
  const [search, setSearch] = useState('');

  return (
    <div className={className}>
      <div onClick={() => setOpen(true)}>{trigger}</div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Ketik untuk mencari..."
          value={search}
          onValueChange={setSearch}
        />
        <CommandList>
          <CommandEmpty>Tidak ada hasil ditemukan.</CommandEmpty>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default SearchDialog;
