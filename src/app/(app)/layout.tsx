import { AppHeader } from '@/components/layout/AppHeader';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { SidebarInset } from '@/components/ui/sidebar';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <div className="flex h-full flex-col">
            <AppHeader />
            <div className="flex-1 animate-in fade-in p-4 sm:px-6 sm:py-4 md:gap-8">
                {children}
            </div>
        </div>
      </SidebarInset>
    </>
  );
}
