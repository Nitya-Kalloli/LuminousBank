// import { Sidebar } from "lucide-react";
import Sidebar from "@/components/Sidebar";
// used for main components of the dashboard/home
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Nitya", lastName: "Prakash" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={ loggedIn} />
          {children}
  </main>
  );
}
