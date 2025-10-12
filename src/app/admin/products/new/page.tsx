"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    price: 0,
    category: "Tilbehør",
    description: "",
    image: "",
    stock: 0,
    active: true
  });

  useEffect(() => {
    if (status === "loading") return;
    
    if (!session) {
      router.push("/admin/login");
      return;
    }
  }, [session, status, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        alert("تم إضافة المنتج بنجاح!");
        router.push("/admin/products");
      } else {
        alert("خطأ في إضافة المنتج");
        setLoading(false);
      }
    } catch (error) {
      alert("خطأ في إضافة المنتج");
      setLoading(false);
    }
  };

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
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
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
        <h2 style={{ margin: 0, color: "#333" }}>إضافة منتج جديد</h2>
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
        <h1 style={{ margin: "0 0 10px 0", color: "#333" }}>إضافة منتج جديد</h1>
        <p style={{ color: "#666", margin: 0 }}>املأ البيانات أدناه لإضافة منتج جديد إلى المتجر</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{
        background: "white",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}>
        <div style={{ display: "grid", gap: "20px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#333" }}>
              اسم المنتج *
            </label>
            <input
              type="text"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="أدخل اسم المنتج"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "14px",
                boxSizing: "border-box"
              }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#333" }}>
                السعر (NOK) *
              </label>
              <input
                type="number"
                step="0.01"
                value={form.price}
                onChange={e => setForm({ ...form, price: +e.target.value })}
                placeholder="0.00"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "14px",
                  boxSizing: "border-box"
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#333" }}>
                الفئة
              </label>
              <select
                value={form.category}
                onChange={e => setForm({ ...form, category: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "14px",
                  boxSizing: "border-box"
                }}
              >
                <option value="Tilbehør">Tilbehør</option>
                <option value="Sigaretter & Snus">Sigaretter & Snus</option>
                <option value="E-Sigaretter & Vape">E-Sigaretter & Vape</option>
                <option value="Sigarer">Sigarer</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#333" }}>
              الوصف
            </label>
            <textarea
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              placeholder="وصف المنتج..."
              rows={4}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "14px",
                boxSizing: "border-box",
                resize: "vertical"
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#333" }}>
              رابط الصورة
            </label>
            <input
              type="url"
              value={form.image}
              onChange={e => setForm({ ...form, image: e.target.value })}
              placeholder="https://example.com/image.jpg"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "14px",
                boxSizing: "border-box"
              }}
            />
            {form.image && (
              <div style={{ marginTop: "10px" }}>
                <img 
                  src={form.image} 
                  alt="معاينة الصورة"
                  style={{ 
                    width: "100px", 
                    height: "100px", 
                    objectFit: "cover", 
                    borderRadius: "4px",
                    border: "1px solid #ddd"
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#333" }}>
              المخزون *
            </label>
            <input
              type="number"
              value={form.stock}
              onChange={e => setForm({ ...form, stock: +e.target.value })}
              placeholder="عدد القطع المتوفرة"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "14px",
                boxSizing: "border-box"
              }}
            />
          </div>

          <div>
            <label style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px",
              fontWeight: "500",
              color: "#333",
              cursor: "pointer"
            }}>
              <input
                type="checkbox"
                checked={form.active}
                onChange={e => setForm({ ...form, active: e.target.checked })}
                style={{ width: "auto" }}
              />
              المنتج نشط
            </label>
            <small style={{ color: "#666", fontSize: "12px" }}>
              المنتجات النشطة فقط ستظهر في المتجر
            </small>
          </div>
        </div>

        <div style={{ 
          display: "flex", 
          gap: "15px", 
          marginTop: "30px",
          paddingTop: "20px",
          borderTop: "1px solid #e0e0e0"
        }}>
          <button 
            type="submit" 
            disabled={loading}
            style={{
              padding: "12px 24px",
              background: loading ? "#ccc" : "#28a745",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background 0.2s"
            }}
          >
            {loading ? "جاري الإضافة..." : "حفظ المنتج"}
          </button>
          
          <a 
            href="/admin/products"
            style={{
              padding: "12px 24px",
              background: "#6c757d",
              color: "white",
              textDecoration: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "500"
            }}
          >
            إلغاء
          </a>
        </div>
      </form>
    </div>
  );
}
