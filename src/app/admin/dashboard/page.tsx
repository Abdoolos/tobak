"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState({
    totalProducts: 0,
    activeProducts: 0,
    lowStock: 0
  });

  useEffect(() => {
    if (status === "loading") return;
    
    if (!session) {
      router.push("/admin/login");
      return;
    }

    // Load stats
    fetch("/api/products")
      .then(res => res.json())
      .then(products => {
        setStats({
          totalProducts: products.length,
          activeProducts: products.filter((p: any) => p.active).length,
          lowStock: products.filter((p: any) => p.stock < 5).length
        });
      });
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontSize: "18px",
        color: "#666"
      }}>
        جاري التحميل...
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Navigation */}
      <nav style={{
        background: "white",
        padding: "15px 20px",
        borderRadius: "8px",
        marginBottom: "20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{ margin: 0, color: "#333" }}>لوحة تحكم الإدارة</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="/admin/products" style={{
            padding: "8px 16px",
            background: "#007bff",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "14px"
          }}>
            المنتجات
          </a>
          <a href="/" style={{
            padding: "8px 16px",
            background: "#28a745",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "14px"
          }}>
            عرض الموقع
          </a>
          <button 
            onClick={() => window.location.href = '/api/auth/signout'}
            style={{
              padding: "8px 16px",
              background: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "14px",
              cursor: "pointer"
            }}
          >
            تسجيل الخروج
          </button>
        </div>
      </nav>

      {/* Header */}
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "8px",
        marginBottom: "20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}>
        <h1 style={{ margin: "0 0 10px 0", color: "#333" }}>مرحباً بك في لوحة التحكم</h1>
        <p style={{ color: "#666", margin: 0 }}>إدارة موقع Tobakkhuset</p>
      </div>

      {/* Stats Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginBottom: "30px"
      }}>
        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
          <h3 style={{ margin: "0 0 10px 0", color: "#666", fontSize: "14px" }}>إجمالي المنتجات</h3>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}>
            {stats.totalProducts}
          </div>
        </div>
        
        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
          <h3 style={{ margin: "0 0 10px 0", color: "#666", fontSize: "14px" }}>المنتجات النشطة</h3>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#28a745" }}>
            {stats.activeProducts}
          </div>
        </div>
        
        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
          <h3 style={{ margin: "0 0 10px 0", color: "#666", fontSize: "14px" }}>مخزون منخفض</h3>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#dc3545" }}>
            {stats.lowStock}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ marginTop: 0, color: "#333" }}>الإجراءات السريعة</h2>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <a href="/admin/products" style={{
            display: "inline-block",
            padding: "12px 20px",
            background: "#007bff",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "500"
          }}>
            📦 إدارة المنتجات
          </a>
          <a href="/admin/products/new" style={{
            display: "inline-block",
            padding: "12px 20px",
            background: "#28a745",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "500"
          }}>
            ➕ إضافة منتج جديد
          </a>
          <a href="/admin/settings" style={{
            display: "inline-block",
            padding: "12px 20px",
            background: "#6c757d",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "500"
          }}>
            ⚙️ الإعدادات
          </a>
        </div>
      </div>
    </div>
  );
}
