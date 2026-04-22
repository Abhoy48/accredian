
import "../styles/globals.css";
import GlobalModalHandler from "@/components/GlobalModalHandler";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        {children}
        <GlobalModalHandler />
      </body>
    </html>
  );
}
