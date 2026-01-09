import {
  CreditCardIcon,
  ClockIcon,
  CheckSquareIcon,
  ArrowRightIcon
} from 'lucide-react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardContent,
  CardTitle
} from '@/components/ui/card';

const Features = () => {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Feature Cards Grid */}
        <div className="flex gap-6 max-lg:flex-col">
          {/* Card 1 */}
          <Card className="group hover:border-primary hover:bg-muted flex-1 transition-all duration-500 hover:flex-2">
            <CardContent className="flex">
              <div className="space-y-6">
                <Avatar className="size-10 shadow-sm">
                  <AvatarFallback className="bg-card text-primary">
                    <CreditCardIcon className="size-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <CardTitle className="text-primary line-clamp-2 text-lg font-semibold">
                    Integrasi Data Nasional
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    Sinkronisasi data kependudukan dari berbagai sumber untuk
                    akurasi dan ketersediaan layanan.
                  </CardDescription>
                </div>
                <Button
                  className="group text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-full bg-transparent text-base transition-all duration-300 has-[>svg]:px-6"
                  size="lg"
                >
                  Pelajari lebih
                  <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Button>
              </div>
              <div>
                <img
                  src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-7.png"
                  alt="Integrasi Data Nasional"
                  className="mx-auto hidden w-40 shrink-0 object-contain group-hover:inline sm:size-56 dark:invert"
                />
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="group flex-1 border-amber-600/30 transition-all duration-500 hover:flex-2 hover:border-amber-600 hover:bg-amber-600/10 dark:border-amber-400/30 dark:hover:border-amber-400 dark:hover:bg-amber-400/10">
            <CardContent className="flex">
              <div className="space-y-6">
                <Avatar className="size-10 shadow-sm">
                  <AvatarFallback className="bg-card text-amber-600 dark:text-amber-400">
                    <ClockIcon className="size-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <CardTitle className="line-clamp-2 text-lg font-semibold text-amber-600 dark:text-amber-400">
                    Layanan Digital Terintegrasi
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    Akses layanan kependudukan secara online, cepat, dan efisien
                    tanpa harus datang ke kantor.
                  </CardDescription>
                </div>
                <Button
                  className="group rounded-full bg-transparent text-base text-amber-600 transition-all duration-300 group-hover:bg-amber-600 group-hover:text-white has-[>svg]:px-6 dark:text-amber-400 dark:group-hover:bg-amber-400 dark:group-hover:text-white"
                  size="lg"
                >
                  Pelajari lebih
                  <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Button>
              </div>
              <div className="dark:hidden">
                <img
                  src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-14.png"
                  alt="Layanan Digital Terintegrasi"
                  className="mx-auto hidden w-40 shrink-0 object-contain group-hover:inline sm:size-56"
                />
              </div>
              <div className="hidden dark:inline-block">
                <img
                  src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-14-dark.png"
                  alt="Layanan Digital Terintegrasi"
                  className="mx-auto hidden w-40 shrink-0 object-contain group-hover:inline sm:size-56"
                />
              </div>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="group flex-1 border-sky-600/30 transition-all duration-500 hover:flex-2 hover:border-sky-600 hover:bg-sky-600/10 dark:border-sky-400/30 dark:hover:border-sky-400 dark:hover:bg-sky-400/10">
            <CardContent className="flex">
              <div className="space-y-6">
                <Avatar className="size-10 shadow-sm">
                  <AvatarFallback className="bg-card text-sky-600 dark:text-sky-400">
                    <CheckSquareIcon className="size-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <CardTitle className="line-clamp-2 text-lg font-semibold text-sky-600 dark:text-sky-400">
                    Keamanan Data Terjamin
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    Perlindungan data pribadi sesuai standar SMKI dengan
                    enkripsi dan audit trail lengkap.
                  </CardDescription>
                </div>
                <Button
                  className="group rounded-full bg-transparent text-base text-sky-600 transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white has-[>svg]:px-6 dark:text-sky-400 dark:group-hover:bg-sky-400 dark:group-hover:text-white"
                  size="lg"
                >
                  Pelajari lebih
                  <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Button>
              </div>
              <div className="dark:hidden">
                <img
                  src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-13.png"
                  alt="Keamanan Data Terjamin"
                  className="mx-auto hidden w-40 shrink-0 object-contain group-hover:inline sm:size-56"
                />
              </div>
              <div className="hidden dark:inline-block">
                <img
                  src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/features/image-13-dark.png"
                  alt="Uncover deeper insights with powerful AI."
                  className="mx-auto hidden w-40 shrink-0 object-contain group-hover:inline sm:size-56"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
