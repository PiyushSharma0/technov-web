import UserState from "@/context/UserState";
import "./globals.css";
import connectDB from "@/db";

export const metadata = {
  title: "Technova",
  description: "Created By Akash & Piyush",
};
connectDB();
export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <UserState>{children}</UserState>
      </body>
    </html>
  );
}
