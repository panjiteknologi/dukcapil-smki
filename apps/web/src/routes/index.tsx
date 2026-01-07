import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomeComponent
});

const TITLE_TEXT = 'DUKCAPIL SMKI';

function HomeComponent() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-2">
      <h1 className="mb-6 text-3xl font-bold">{TITLE_TEXT}</h1>
      <div className="grid gap-6">
        <section className="rounded-lg border p-4">
          <h2 className="mb-2 font-medium">API Status</h2>
        </section>
      </div>
    </div>
  );
}
