"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("admin@local");
  const [password, setPassword] = useState("admin123");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false
    });

    if (result?.ok) {
      router.push("/admin/dashboard");
    } else {
      alert("Feil brukernavn eller passord");
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "80px auto", padding: "20px" }}>
      <div style={{ 
        textAlign: "center", 
        marginBottom: "32px",
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
      }}>
        <h1 style={{ color: "#333", marginBottom: "10px" }}>Admin Innlogging</h1>
        <p style={{ color: "#666", marginTop: "10px" }}>Tobakkhuset Administrasjonspanel</p>
      </div>

      <form onSubmit={handleSubmit} style={{
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
      }}>
        <label style={{ display: "block", marginBottom: "15px" }}>
          <span style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>E-post</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@local"
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
        </label>

        <label style={{ display: "block", marginBottom: "20px" }}>
          <span style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>Passord</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="admin123"
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
        </label>

        <button 
          type="submit"
          disabled={loading}
          style={{ 
            width: "100%", 
            padding: "12px",
            background: loading ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "background 0.2s"
          }}
        >
          {loading ? "Logger inn..." : "Logg inn"}
        </button>
      </form>

    </div>
  );
}
