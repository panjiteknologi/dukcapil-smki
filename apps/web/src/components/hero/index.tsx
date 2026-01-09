import { MotionPreset } from '@/components/ui/motion-preset';
import { BounceButton } from '@/components/ui/bounce-button';
import Hand from '@/assets/hand';
import Glasses from '@/assets/glasses';

const HeroSection = () => {
  return (
    <section className="flex-1 overflow-hidden py-4 sm:py-6 lg:py-8">
      <div className="mx-auto flex h-full max-w-7xl flex-col gap-12 px-4 sm:gap-16 sm:px-6 lg:gap-24 lg:px-8">
        <div className="relative grid gap-12 lg:grid-cols-5">
          <div className="flex flex-col justify-center gap-6 lg:col-span-3">
            <MotionPreset
              fade
              slide={{ offset: 50 }}
              blur
              transition={{ duration: 0.5 }}
              delay={0.3}
            >
              <h1 className="max-w-3xl text-3xl leading-[1.29167] font-bold sm:text-4xl lg:text-5xl">
                Layanan Kependudukan & Pencatatan Sipil Terpadu
              </h1>
            </MotionPreset>
            <MotionPreset
              fade
              slide={{ offset: 50 }}
              blur
              transition={{ duration: 0.5 }}
              delay={0.5}
            >
              <p className="text-muted-foreground text-lg">
                Sistem Manajemen Keamanan Informasi (SMKI) untuk menjamin
                kerahasiaan, integritas, dan ketersediaan data kependudukan.
                Layanan terpadu dengan standar keamanan tinggi untuk memproses
                dokumen KTP, KK, Akta, dan dokumen kependudukan lainnya dengan
                cepat, aman, dan terpercaya.
              </p>
            </MotionPreset>
            <MotionPreset
              component="div"
              fade
              slide={{ offset: 50 }}
              blur
              transition={{ duration: 0.5 }}
              delay={0.7}
              className="flex flex-wrap items-center gap-6"
            >
              <BounceButton>Mulai Daftar</BounceButton>
              <div className="flex flex-col">
                <span className="text-xl font-medium">38</span>
                <span className="text-muted-foreground">
                  Integrasi Provinsi
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-medium">20+</span>
                <span className="text-muted-foreground">Layanan Digital</span>
              </div>
            </MotionPreset>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:max-w-184">
              <MotionPreset
                component="div"
                fade
                slide={{ direction: 'down', offset: 50 }}
                blur
                transition={{ duration: 0.5 }}
                delay={0.9}
                className="bg-muted group relative h-39 overflow-hidden rounded-md p-3"
              >
                <span className="text-muted-foreground text-xl font-medium">
                  Proses Cepat & Mudah
                </span>
                <div className="text-muted-foreground absolute end-5.5 -bottom-0.5 transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:drop-shadow-sm">
                  <Hand />
                </div>
              </MotionPreset>
              <MotionPreset
                component="div"
                fade
                slide={{ direction: 'down', offset: 50 }}
                blur
                transition={{ duration: 0.5 }}
                delay={1.0}
                className="bg-muted group relative h-39 overflow-hidden rounded-md p-3"
              >
                <span className="text-muted-foreground text-xl font-medium">
                  Layanan Profesional & Bersertifikat
                </span>
                <div className="text-muted-foreground absolute end-15.5 -bottom-0.5 transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:scale-115 group-hover:drop-shadow-sm">
                  <div className="relative">
                    <div className="text-muted-foreground absolute size-42 -translate-x-1/2 -translate-y-1/2 rounded-full border"></div>
                    <div className="text-muted-foreground absolute size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border"></div>
                    <div className="text-muted-foreground absolute size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border"></div>
                    <div className="text-muted-foreground absolute size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border"></div>
                  </div>
                </div>
                <div className="absolute end-1 -bottom-2 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:drop-shadow-sm">
                  <img
                    src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-43.png"
                    alt="girl"
                    className="w-28 object-cover"
                  />
                </div>
              </MotionPreset>
              <MotionPreset
                component="div"
                fade
                slide={{ direction: 'down', offset: 50 }}
                blur
                transition={{ duration: 0.5 }}
                delay={1.1}
                className="bg-muted group relative h-39 overflow-hidden rounded-md p-3"
              >
                <span className="text-muted-foreground text-xl font-medium">
                  Keamanan Data Terjamin
                </span>
                <div className="text-muted-foreground absolute end-5.5 -bottom-0.5 transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:drop-shadow-sm">
                  <Glasses />
                </div>
              </MotionPreset>
            </div>
          </div>
          <MotionPreset
            component="div"
            fade
            slide={{ direction: 'right', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.5}
            className="relative flex items-center justify-center lg:col-span-2"
          >
            <img
              src="https://ik.imagekit.io/sqijjszoo/dukcapil-smki/hero.png"
              alt="boy light"
              className="size-full object-contain md:max-lg:size-3/4"
            />
          </MotionPreset>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
