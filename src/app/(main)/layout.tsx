import Header from "@/app/_components/layout/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-8">
        {children}
      </main>
    </div>
  );
} 