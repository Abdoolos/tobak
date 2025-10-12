"use client";
import { SessionProvider } from "next-auth/react";
import "../globals.css";

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div style={{ 
        minHeight: "100vh", 
        background: "#f5f5f5",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        {children}
      </div>
    </SessionProvider>
  );
}
