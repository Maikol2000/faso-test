import ScrollToTopButton from "@/components/scroll-to-top-button/ScrollToTopButton";

export default function LayoutAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <ScrollToTopButton />
    </>
  );
}
