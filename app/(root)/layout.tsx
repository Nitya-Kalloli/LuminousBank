// used for main components of the dashboard/home
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>
          SIDEBAR
          {children}
  </main>
  );
}
