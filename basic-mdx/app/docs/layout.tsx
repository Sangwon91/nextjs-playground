export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-10 sm:px-20 md:px-30 lg:px-40 xl:px-60 2xl:px-80">
      {children}
    </div>
  );
}
