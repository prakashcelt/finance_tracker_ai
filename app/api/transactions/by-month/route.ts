import { NextRequest, NextResponse } from "next/server";
import { getTransactionsByMonth } from "@/data/getTransactionsByMonth";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const month = Number(searchParams.get("month"));
    const year = Number(searchParams.get("year"));
    if (!month || !year) {
      return NextResponse.json({ error: "month and year are required" }, { status: 400 });
    }
    const transactions = await getTransactionsByMonth({ month, year });
    return NextResponse.json({ transactions: transactions ?? [] });
  } catch (err: any) {
    console.error("/api/transactions/by-month error", err);
    return NextResponse.json({ error: err?.message || "Failed" }, { status: 500 });
  }
}

