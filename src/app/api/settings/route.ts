import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  try {
    const settings = await prisma.setting.findMany();
    return NextResponse.json(settings);
  } catch (error) {
    console.error("Settings error:", error);
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    
    // Update setting by key
    const setting = await prisma.setting.update({
      where: { key: body.key },
      data: { value: body.value }
    });
    
    return NextResponse.json(setting);
  } catch (error) {
    console.error("Error updating setting:", error);
    return NextResponse.json({ error: "Failed to update setting" }, { status: 500 });
  }
}
