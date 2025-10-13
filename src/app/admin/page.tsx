"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/admin/dashboard");
  }, [router]);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      fontSize: "18px",
      color: "#666"
    }}>
      جاري التحويل إلى لوحة التحكم...
    </div>
  );
}
