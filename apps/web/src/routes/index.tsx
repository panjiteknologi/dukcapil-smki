import { createFileRoute } from '@tanstack/react-router';
import HeroSection from '@/components/hero';
import Header from '@/components/hero/header';
import Features from '@/components/features';

export const Route = createFileRoute('/')({
  component: HomeComponent
});

function HomeComponent() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col">
        <HeroSection />
        <Features />
      </main>
    </div>
  );
}
