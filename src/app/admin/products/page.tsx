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
    if (!confirm(`Er du sikker på at du vil slette "${name}"?`)) return;
    
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE"
      });
      
      if (res.ok) {
        setProducts(products.filter((p: any) => p.id !== id));
        alert("Produktet ble slettet");
      } else {
        alert("Feil ved sletting av produkt");
      }
    } catch (error) {
      alert("Feil ved sletting av produkt");
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
        Laster...
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
        <h2 style={{ margin: 0, color: "#333" }}>Produktadministrasjon</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="/admin/dashboard" style={{
            padding: "8px 16px",
            background: "#6c757d",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "14px"
          }}>
            Kontrollpanel
          </a>
          <a href="/admin/products/new" style={{
            padding: "8px 16px",
            background: "#28a745",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "14px"
          }}>
            Legg til produkt
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
            Logg ut
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
          <h1 style={{ margin: "0 0 5px 0", color: "#333" }}>Alle produkter</h1>
          <p style={{ color: "#666", margin: 0 }}>Totalt antall: {products.length}</p>
        </div>
        <a href="/admin/products/new" style={{
          padding: "12px 20px",
          background: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "6px",
          fontWeight: "500"
        }}>
          ➕ Legg til nytt produkt
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
            <p style={{ fontSize: "18px", marginBottom: "20px" }}>Ingen produkter for øyeblikket</p>
            <a href="/admin/products/new" style={{
              padding: "12px 24px",
              background: "#007bff",
              color: "white",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "500"
            }}>
              Legg til første produkt
            </a>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8f9fa" }}>
                  <th style={{ padding: "15px", textAlign: "right", borderBottom: "1px solid #e0e0e0" }}>Bilde</th>
                  <th style={{ padding: "15px", textAlign: "right", borderBottom: "1px solid #e0e0e0" }}>Produktnavn</th>
                  <th style={{ padding: "15px", textAlign: "right", borderBottom: "1px solid #e0e0e0" }}>Pris</th>
                  <th style={{ padding: "15px", textAlign: "right", borderBottom: "1px solid #e0e0e0" }}>Lager</th>
                  <th style={{ padding: "15px", textAlign: "right", borderBottom: "1px solid #e0e0e0" }}>Status</th>
                  <th style={{ padding: "15px", textAlign: "right", borderBottom: "1px solid #e0e0e0" }}>Handlinger</th>
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
                          Ingen bilde
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
                        {product.active ? "Aktiv" : "Inaktiv"}
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
                          Slett
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
