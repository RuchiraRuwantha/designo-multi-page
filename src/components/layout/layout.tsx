import Footer from "../common/footer/Footer";
import Header from "../common/navigation/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col font-jost w-full h-full">
      <main className="app-bg w-full h-full lg:pt-14 pt-[116px] 2xl:px-64 lg:px-32 md:px-8">
        <Header />
        <div className="w-full">
          {children}
        </div>
      </main>
      <div className="relative w-full bottom-0 left-0">
        <Footer />
      </div>
    </div>
  )
}