import Navbar from "@/components/Navbar";
import "./globals.css";
import ReduxProvider from "@/redux/Provider";

export const metadata = {
  title: "App - Test",
  description: "By Rakib",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <div className="max-w-[990px] mx-auto">
            <Navbar />

            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
