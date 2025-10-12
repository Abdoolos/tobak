import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const settings = await prisma.setting.findMany({
      orderBy: { key: "asc" }
    });
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const incoming = await request.json();
    
    if (!Array.isArray(incoming)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const operations = incoming.map((setting: any) =>
      prisma.setting.upsert({
        where: { key: setting.key },
        update: setting,
        create: setting
      })
    );

    await Promise.all(operations);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
