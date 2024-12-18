import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 p-4">
            <SidebarTrigger className="p-2 bg-gray-200 rounded-md">
              Toggle Sidebar
            </SidebarTrigger>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}
