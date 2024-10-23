import { SidebarMenu, TopMenu } from "@/components";

export default function shopLayout({ children }: {
 children: React.ReactNode;

}) {
  return (
    <div className="min-h-screen bg-slate-50">

      <TopMenu />
      <SidebarMenu />

      <div className="px-0 md:px-10">
        { children }
      </div>

    </div>
  );
}