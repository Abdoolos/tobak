"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [settings, setSettings] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/settings')
      .then(res => res.json())
      .then(data => setSettings(data))
      .catch(err => console.error(err));
  }, []);
  
  const S = (k: string, d: string = "") => 
    settings.find(s => s.key === k)?.value ?? d;

  return (
    <div className="py-8 space-y-12">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
          {S("site_title", "Tobakkhuset")}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {S("site_tagline", "Eksklusiv tobakk. Besøk oss på Grünerløkka.")}
        </p>
        <div className="mt-8">
          <a href="/products" className="btn primary btn-lg px-8">
            Se våre produkter
          </a>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          🕐 <span>Åpningstider</span>
        </h2>
        <div className="grid gap-3 max-w-2xl">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors">
            <strong className="text-gray-900">Mandag - Torsdag:</strong>
            <span className="text-primary-600 font-semibold">{S("hours_monday", "11:00-23:00")}</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors">
            <strong className="text-gray-900">Fredag - Lørdag:</strong>
            <span className="text-primary-600 font-semibold">{S("hours_friday", "11:00-02:00")}</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors">
            <strong className="text-gray-900">Søndag:</strong>
            <span className="text-primary-600 font-semibold">{S("hours_sunday", "11:00-23:00")}</span>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          📍 <span>Besøk oss</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">🏪</span>
              <span className="text-lg">{S("address", "Grünerløkka, Oslo")}</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">📞</span>
              <span className="text-lg">{S("phone", "+47 12 34 56 78")}</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">✉️</span>
              <span className="text-lg">{S("email", "kontakt@tobakkhuset.no")}</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl border border-primary-200">
            <h3 className="text-xl font-semibold mb-4 text-primary-800">Velkommen</h3>
            <p className="text-lg leading-relaxed text-primary-700">
              {S("welcome_text", "Vi kombinerer tradisjon med moderne nytelse.")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
