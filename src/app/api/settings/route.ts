import { NextResponse } from "next/server";

// Since we don't have a Settings model in Prisma, we'll use a simple JSON file approach
// or return default settings

export async function GET() {
  try {
    // Return default settings
    const settings = {
      siteName: "Tobakkhuset",
      siteDescription: "متجر التبغ والنرجيلة",
      contactEmail: "info@tobakkhuset.com",
      contactPhone: "+46 123 456 789",
      address: "Stockholm, Sweden",
      currency: "kr",
      taxRate: 25,
      shippingCost: 50
    };
    
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const settings = await request.json();
    
    // For now, we'll just acknowledge the save
    // In a real app, you'd save this to a database or file
    console.log("Settings saved:", settings);
    
    return NextResponse.json({ success: true, settings });
  } catch (error) {
    console.error("Error saving settings:", error);
    return NextResponse.json({ error: "Failed to save settings" }, { status: 500 });
  }
}
