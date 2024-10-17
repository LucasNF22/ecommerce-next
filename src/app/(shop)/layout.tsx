import { SidebarMenu, TopMenu } from "@/components";

export default function shopLayout({ children }: {
 children: React.ReactNode;

}) {
  return (
    <div className="min-h-screen">

      <TopMenu />
      <SidebarMenu />

      <div className="px-0 sm:px-10">
        { children }
      </div>

    </div>
  );
}