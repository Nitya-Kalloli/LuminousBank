// import { Sidebar } from "lucide-react";
import Sidebar from "@/components/Sidebar";
// used for main components of the dashboard/home
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Nitya", lastName: "Prakash" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={ loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
  </main>
  );
}
