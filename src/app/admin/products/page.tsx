"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminProductsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return;
    
    if (!session) {
      router.push("/admin/login");
      return;
    }

    // Load products
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [session, status, router]);

  const deleteProduct = async (id: number, name: string) => {
    if (!confirm(`هل أنت متأكد من حذف "${name}"؟`)) return;
    
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE"
      });
      
      if (res.ok) {
        setProducts(products.filter((p: any) => p.id !== id));
        alert("تم حذف المنتج بنجاح");
      } else {
        alert("خطأ في حذف المنتج");
      }
    } catch (error) {
      alert("خطأ في حذف المنتج");
    }
  };

  if (status === "loading" || loading) {
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
        <h2 style={{ margin: 0, color: "#333" }}>إدارة المنتجات</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="/admin/dashboard" style={{
            padding: "8px 16px",
            background: "#6c757d",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "14px"
          }}>
            لوحة التحكم
          </a>
          <a href="/admin/products/new" style={{
            padding: "8px 16px",
            background: "#28a745",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "14px"
          }}>
            إضافة منتج
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
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div>
          <h1 style={{ margin: "0 0 5px 0", color: "#333" }}>جميع المنتجات</h1>
          <p style={{ color: "#666", margin: 0 }}>العدد الإجمالي: {products.length}</p>
        </div>
        <a href="/admin/products/new" style={{
          padding: "12px 20px",
          background: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "6px",
          fontWeight: "500"
        }}>
          ➕ إضافة منتج جديد
        </a>
      </div>

      {/* Products List */}
      <div style={{
        background: "white",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        overflow: "hidden"
      }}>
        {products.length === 0 ? (
          <div style={{ 
            padding: "60px 20px", 
            textAlign: "center", 
            color: "#666" 
          }}>
            <p style={{ fontSize: "18px", marginBottom: "20px" }}>لا توجد منتجات حالياً</p>
            <a href="/admin/products/new" style={{
              padding: "12px 24px",
              background: "#007bff",
              color: "white",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "500"
            }}>
              إضافة أول منتج
            </a>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8f9fa" }}>
                  <th style={{ padding: "15px", textAlign: "right", borderBottom: "1px solid #e0e0e0" }}>الصورة</th>
                  <th style={{ padding: "15px", textAlign: "right", borderBottom: "1px solid #e0e0e0" }}>اسم المنتج</th>
                  <th style={{ padding: "15px", textAlign: "right", borderBottom: "1px solid #e0e0e0" }}>السعر</th>
                  <th style={{ padding: "15px", textAlign: "right", borderBottom: "1px solid #e0e0e0" }}>المخزون</th>
                  <th style={{ padding: "15px", textAlign: "right", borderBottom: "1px solid #e0e0e0" }}>الحالة</th>
                  <th style={{ padding: "15px", textAlign: "right", borderBottom: "1px solid #e0e0e0" }}>الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product: any) => (
                  <tr key={product.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                    <td style={{ padding: "15px" }}>
                      {product.image ? (
                        <img 
                          src={product.image} 
                          alt={product.name}
                          style={{ 
                            width: "50px", 
                            height: "50px", 
                            borderRadius: "4px",
                            objectFit: "cover"
                          }}
                        />
                      ) : (
                        <div style={{ 
                          width: "50px", 
                          height: "50px", 
                          background: "#f0f0f0",
                          borderRadius: "4px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "10px",
                          color: "#666"
                        }}>
                          لا توجد صورة
                        </div>
                      )}
                    </td>
                    <td style={{ padding: "15px" }}>
                      <strong>{product.name}</strong>
                      {product.description && (
                        <div style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}>
                          {product.description.length > 50 
                            ? product.description.substring(0, 50) + "..."
                            : product.description
                          }
                        </div>
                      )}
                    </td>
                    <td style={{ padding: "15px", fontWeight: "bold" }}>
                      {product.price.toFixed(2)} kr
                    </td>
                    <td style={{ padding: "15px" }}>
                      <span style={{ 
                        color: product.stock < 5 ? "#dc3545" : product.stock < 10 ? "#ffc107" : "#28a745",
                        fontWeight: "bold"
                      }}>
                        {product.stock}
                      </span>
                    </td>
                    <td style={{ padding: "15px" }}>
                      <span style={{ 
                        color: product.active ? "#28a745" : "#dc3545",
                        fontWeight: "bold"
                      }}>
                        {product.active ? "نشط" : "غير نشط"}
                      </span>
                    </td>
                    <td style={{ padding: "15px" }}>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <button 
                          onClick={() => deleteProduct(product.id, product.name)}
                          style={{
                            padding: "6px 12px",
                            background: "#dc3545",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            fontSize: "12px",
                            cursor: "pointer"
                          }}
                        >
                          حذف
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
