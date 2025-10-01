"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";

async function fetchRecentTransactions(): Promise<Array<{ id: number; description: string; amount: number; transactionDate: string; category: string; transactionType: string }>> {
  const now = new Date();
  const months: Array<{ month: number; year: number }> = [];
  for (let i = 0; i < 3; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push({ month: d.getMonth() + 1, year: d.getFullYear() });
  }
  const results: Array<any> = [];
  for (const m of months) {
    const res = await fetch(`/api/transactions/by-month?month=${m.month}&year=${m.year}`);
    if (res.ok) {
      const data = await res.json();
      results.push(...(data?.transactions ?? []));
    }
  }
  return results;
}

export default function GeminiPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [txLoading, setTxLoading] = useState(false);
  const [tx, setTx] = useState<any[]>([]);

  const handleAsk = async () => {
    setError(null);
    setAnswer(null);
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");
      setAnswer(data.text as string);
    } catch (e: any) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadTransactions = async () => {
    setTxLoading(true);
    try {
      const data = await fetchRecentTransactions();
      setTx(data);
    } finally {
      setTxLoading(false);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Ask Gemini</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="Type your prompt..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAsk();
              }}
            />
            <Button onClick={handleAsk} disabled={loading}>
              {loading ? "Asking..." : "Ask"}
            </Button>
          </div>
          {error && <p className="text-red-400 mt-4">{error}</p>}
          {answer && (
            <div className="mt-6 whitespace-pre-wrap text-sm leading-6">
              {answer}
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="w-full max-w-3xl mx-auto mt-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent 3 months transactions</CardTitle>
            <Button variant="outline" onClick={handleLoadTransactions} disabled={txLoading}>
              {txLoading ? "Loading..." : "Load"}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {!tx.length && <p className="text-sm text-slate-400">No data loaded yet.</p>}
          {!!tx.length && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tx.map((t) => (
                  <TableRow key={t.id}>
                    <TableCell>{format(new Date(t.transactionDate), "do MMM yyyy")}</TableCell>
                    <TableCell>{t.description}</TableCell>
                    <TableCell className="capitalize">{t.transactionType}</TableCell>
                    <TableCell>{t.category}</TableCell>
                    <TableCell>£{Number(t.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

