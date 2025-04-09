// Layout for all compoenentts that use a sidebar
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
