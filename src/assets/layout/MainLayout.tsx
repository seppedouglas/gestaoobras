import Header from "./Header";
import SideBar from "./SideBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[14rem_1fr] grid-rows-[3rem_1fr] h-screen overflow-hidden">
      <div className="bg-lightt col-start-2 col-span-2 border-b border-b-gray-300">
        <Header />
      </div>
      <div className="bg-primaryy text-amber-50 row-start-1 row-span-2 h-screen">
        <SideBar />
      </div>
      <div className="bg-lightt overflow-y-auto">{children}</div>
    </div>
  );
}
