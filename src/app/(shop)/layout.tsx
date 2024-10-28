import { Footer, SidebarMenu, TopMenu } from "@/components";

export default function shopLayout({ children }: {
  children: React.ReactNode;

}) {
  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col justify-between ">

      <div className="pb-10">
        <TopMenu />
        <SidebarMenu />

        <div className="px-0 md:px-10 ">
          {children}
        </div>

      </div>

      <Footer />

    </div>
  );
}