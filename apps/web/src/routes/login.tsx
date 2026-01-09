import Logo from '@/assets/logo';
import AuthFullBackgroundShape from '@/assets/svg/auth-full-background-shape';
import LoginForm from '@/components/login-form';
import { BorderBeam } from '@/components/ui/border-beam';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ChevronLeftIcon } from 'lucide-react';

export const Route = createFileRoute('/login')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="h-dvh lg:grid lg:grid-cols-6">
      {/* Dashboard Preview */}
      <div className="max-lg:hidden lg:col-span-3 xl:col-span-4">
        <div className="bg-muted relative z-1 flex h-full items-center justify-center px-6">
          <div className="outline-border relative shrink rounded-[20px] p-2.5 outline-2 -outline-offset-2">
            <img
              src="https://ik.imagekit.io/sqijjszoo/dukcapil-smki/auth-image.png"
              className="max-h-111 w-full rounded-lg object-contain"
              alt="Dashboards"
            />

            <BorderBeam duration={8} borderWidth={2} size={100} />
          </div>

          <div className="absolute -z-1">
            <AuthFullBackgroundShape />
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex h-full flex-col items-center justify-center py-10 sm:px-5 lg:col-span-3 xl:col-span-2">
        <div className="w-full max-w-md px-6">
          <Link
            to="/"
            className="text-muted-foreground group mb-12 flex items-center gap-2 sm:mb-16 lg:mb-24"
          >
            <ChevronLeftIcon className="transition-transform duration-200 group-hover:-translate-x-0.5" />
            <p className="text-xs">Kembali ke Beranda</p>
          </Link>

          <div className="flex flex-col gap-6">
            <Logo className="gap-3" />

            <div>
              <h2 className="mb-1.5 text-2xl font-semibold">
                Masuk ke Dukcapil SMKI
              </h2>
              <p className="text-muted-foreground">
                Dukcapil PRIMA Indonesia Maju!
              </p>
            </div>

            {/* Quick Login Buttons */}
            {/* <div className="flex flex-wrap gap-4 sm:gap-6">
              <Button variant="outline" className="grow">
                Login as User
              </Button>
              <Button variant="outline" className="grow">
                Login as Admin
              </Button>
            </div> */}

            {/* Form */}
            <LoginForm />

            <div className="space-y-4">
              <p className="text-muted-foreground text-xs text-center">
                Belum memiliki akun?{' '}
                <Link
                  to="/register"
                  className="text-foreground hover:underline"
                >
                  Daftar di Dukcapil SMKI
                </Link>
              </p>

              <div className="flex items-center gap-4 text-xs">
                <Separator className="flex-1" />
                <p>atau</p>
                <Separator className="flex-1" />
              </div>

              <Button variant="ghost" className="w-full">
                Masuk dengan Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
