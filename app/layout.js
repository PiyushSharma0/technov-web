import UserState from "@/context/UserState";
import "./globals.css";

export const metadata = {
  title: "Technova",
  description: "Created By Akash & Piyush",
};




export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <UserState>{children}</UserState>
      </body>
    </html>
  );
}
