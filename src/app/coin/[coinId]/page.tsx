"use client";

export default function Coin({ params }: { params: { coinId: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {params.coinId}
    </main>
  );
}
