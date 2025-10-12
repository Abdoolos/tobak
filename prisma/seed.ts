import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Products
  const products = [
    {
      name: "420 Glass Pipe Set In Suite Case",
      price: 480,
      category: "Tilbehør",
      description: "Komplett glass pipe sett i elegant koffert. Høy kvalitet og profesjonell finish.",
      image: "/api/placeholder/300/200",
      stock: 5,
      active: true
    },
    {
      name: "Angel Jet Lighter - 12 Stk",
      price: 384,
      category: "Tilbehør",
      description: "Profesjonelle jet lightere, pakke med 12 stk. Pålitelig og kraftig flamme.",
      image: "/api/placeholder/300/200",
      stock: 12,
      active: true
    },
    {
      name: "Acrylic Bong 20cm",
      price: 112,
      category: "Tilbehør",
      description: "Akryl vannpipe, 20cm høyde. Lett å rengjøre og holdbar.",
      image: "/api/placeholder/300/200",
      stock: 8,
      active: true
    },
    {
      name: "Acrylic Bong 30cm",
      price: 140,
      category: "Tilbehør",
      description: "Akryl vannpipe, 30cm høyde. Større størrelse for bedre opplevelse.",
      image: "/api/placeholder/300/200",
      stock: 6,
      active: true
    },
    {
      name: "ANGEL Mini Filter Pack",
      price: 192,
      category: "Tilbehør",
      description: "Mini filter pakke - 10 x 24 stk. Forbedrer smak.",
      image: "/api/placeholder/300/200",
      stock: 15,
      active: true
    },
    {
      name: "AIR Nature Spray: Rosa Bianca",
      price: 288,
      category: "Tilbehør",
      description: "Luftfrisker spray - 250ml x 12 stk. Naturlig duft.",
      image: "/api/placeholder/300/200",
      stock: 10,
      active: true
    },
    {
      name: "Premium Glass Bong 25cm",
      price: 350,
      category: "Tilbehør",
      description: "Elegant glass vannpipe med design. Borosilikat glass.",
      image: "/api/placeholder/300/200",
      stock: 4,
      active: true
    },
    {
      name: "Wooden Pipe Collection",
      price: 125,
      category: "Tilbehør",
      description: "Håndlaget tre-pipe. Tradisjonelt håndverk.",
      image: "/api/placeholder/300/200",
      stock: 7,
      active: true
    }
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { id: products.indexOf(product) + 1 },
      update: product,
      create: product
    });
  }

  console.log(`✅ Created ${products.length} products`);

  // Settings
  const settings = [
    { key: "site_title", value: "Tobakkhuset", type: "text", label: "Tittel", group: "general" },
    { key: "site_tagline", value: "Eksklusiv tobakk. Besøk oss på Grünerløkka.", type: "text", label: "Tagline", group: "general" },
    { key: "address", value: "Grünerløkka, Oslo", type: "text", label: "Adresse", group: "general" },
    { key: "phone", value: "+47 12 34 56 78", type: "text", label: "Telefon", group: "general" },
    { key: "email", value: "kontakt@tobakkhuset.no", type: "text", label: "E-post", group: "general" },
    { key: "hours_monday", value: "11:00-23:00", type: "text", label: "Mandag", group: "hours" },
    { key: "hours_tuesday", value: "11:00-23:00", type: "text", label: "Tirsdag", group: "hours" },
    { key: "hours_wednesday", value: "11:00-23:00", type: "text", label: "Onsdag", group: "hours" },
    { key: "hours_thursday", value: "11:00-23:00", type: "text", label: "Torsdag", group: "hours" },
    { key: "hours_friday", value: "11:00-02:00", type: "text", label: "Fredag", group: "hours" },
    { key: "hours_saturday", value: "11:00-02:00", type: "text", label: "Lørdag", group: "hours" },
    { key: "hours_sunday", value: "11:00-23:00", type: "text", label: "Søndag", group: "hours" },
    { key: "hero_title", value: "Velkommen til Tobakkhuset", type: "text", label: "Hero tittel", group: "homepage" },
    { key: "hero_subtitle", value: "Din destinasjon for førsteklasses tobakksprodukter", type: "text", label: "Hero undertekst", group: "homepage" },
    { key: "welcome_text", value: "Vi kombinerer tradisjon med moderne nytelse.", type: "textarea", label: "Velkomst", group: "homepage" },
    { key: "designer_name", value: "Abdullah Alawiss", type: "text", label: "اسم المصمم", group: "general" },
    { key: "avatar_image", value: "myimage1", type: "text", label: "صورة الأفاتار", group: "general" }
  ];

  for (const setting of settings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: setting,
      create: setting
    });
  }

  console.log(`✅ Created ${settings.length} settings`);
  console.log("🎉 Seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
