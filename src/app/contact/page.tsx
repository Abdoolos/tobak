import { prisma } from "@/lib/prisma";

export default async function ContactPage() {
  const settings = await prisma.setting.findMany();
  const S = (k: string, d: string = "") => 
    settings.find(s => s.key === k)?.value ?? d;

  return (
    <section style={{ maxWidth: "600px", margin: "40px auto" }}>
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1>Kontakt oss</h1>
      </div>
      
      <div style={{ marginTop: "24px" }}>
        <h3>📍 Adresse</h3>
        <p>{S("address", "Grünerløkka, Oslo")}</p>
      </div>

      <div style={{ marginTop: "24px" }}>
        <h3>📞 Telefon</h3>
        <p>{S("phone", "+47 12 34 56 78")}</p>
      </div>

      <div style={{ marginTop: "24px" }}>
        <h3>✉️ E-post</h3>
        <p>{S("email", "kontakt@tobakkhuset.no")}</p>
      </div>

      <div style={{ marginTop: "24px" }}>
        <h3>� Åpningstider</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Mandag - Torsdag: {S("hours_monday", "11:00-23:00")}</li>
          <li>Fredag - Lørdag: {S("hours_friday", "11:00-02:00")}</li>
          <li>Søndag: {S("hours_sunday", "11:00-23:00")}</li>
        </ul>
      </div>
    </section>
  );
}
