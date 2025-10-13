"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SettingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [settings, setSettings] = useState({
    siteName: "Tobakkhuset",
    siteDescription: "متجر التبغ والنرجيلة",
    contactEmail: "info@tobakkhuset.com",
    contactPhone: "+46 123 456 789",
    address: "Stockholm, Sweden",
    currency: "kr",
    taxRate: 25,
    shippingCost: 50
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (status === "loading") return;
    
    if (!session) {
      router.push("/admin/login");
      return;
    }

    // Load settings
    fetch("/api/settings")
      .then(res => res.json())
      .then(data => {
        if (data) {
          setSettings(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [session, status, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(settings)
      });

      if (res.ok) {
        alert("تم حفظ الإعدادات بنجاح");
      } else {
        alert("خطأ في حفظ الإعدادات");
      }
    } catch (error) {
      alert("خطأ في حفظ الإعدادات");
    } finally {
      setSaving(false);
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
        <h2 style={{ margin: 0, color: "#333" }}>الإعدادات</h2>
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
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ margin: "0 0 10px 0", color: "#333" }}>إعدادات الموقع</h1>
        <p style={{ color: "#666", margin: 0 }}>إدارة إعدادات الموقع العامة</p>
      </div>

      {/* Designer Info */}
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "8px",
        marginBottom: "20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}>
        <div style={{ marginBottom: "15px" }}>
          <Image 
            src="/images/myimage1.jpg" 
            alt="Abdullah Alawiss"
            width={100}
            height={100}
            style={{ 
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #007bff"
            }}
          />
        </div>
        <h3 style={{ margin: "10px 0", color: "#333" }}>المصمم: Abdullah Alawiss</h3>
        <p style={{ color: "#666", fontSize: "14px" }}>جميع حقوق التصميم محفوظة</p>
      </div>

      {/* Settings Form */}
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ marginBottom: "20px", color: "#333" }}>معلومات الموقع</h3>
            
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#333" }}>
                اسم الموقع
              </label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "14px"
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#333" }}>
                وصف الموقع
              </label>
              <textarea
                value={settings.siteDescription}
                onChange={(e) => setSettings({...settings, siteDescription: e.target.value})}
                rows={3}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "14px",
                  resize: "vertical"
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ marginBottom: "20px", color: "#333" }}>معلومات الاتصال</h3>
            
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#333" }}>
                البريد الإلكتروني
              </label>
              <input
                type="email"
                value={settings.contactEmail}
                onChange={(e) => setSettings({...settings, contactEmail: e.target.value})}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "14px"
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#333" }}>
                رقم الهاتف
              </label>
              <input
                type="tel"
                value={settings.contactPhone}
                onChange={(e) => setSettings({...settings, contactPhone: e.target.value})}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "14px"
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#333" }}>
                العنوان
              </label>
              <input
                type="text"
                value={settings.address}
                onChange={(e) => setSettings({...settings, address: e.target.value})}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "14px"
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ marginBottom: "20px", color: "#333" }}>إعدادات المتجر</h3>
            
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#333" }}>
                العملة
              </label>
              <input
                type="text"
                value={settings.currency}
                onChange={(e) => setSettings({...settings, currency: e.target.value})}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "14px"
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#333" }}>
                نسبة الضريبة (%)
              </label>
              <input
                type="number"
                value={settings.taxRate}
                onChange={(e) => setSettings({...settings, taxRate: parseFloat(e.target.value)})}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "14px"
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#333" }}>
                تكلفة الشحن ({settings.currency})
              </label>
              <input
                type="number"
                value={settings.shippingCost}
                onChange={(e) => setSettings({...settings, shippingCost: parseFloat(e.target.value)})}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "14px"
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={saving}
            style={{
              padding: "12px 30px",
              background: saving ? "#ccc" : "#28a745",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: saving ? "not-allowed" : "pointer"
            }}
          >
            {saving ? "جاري الحفظ..." : "💾 حفظ الإعدادات"}
          </button>
        </form>
      </div>
    </div>
  );
}
