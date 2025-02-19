'use client';
import TattooForm from "./components/TattooForm";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Tattoo Generator</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <TattooForm />
        </div>
      </div>
    </main>
  );
}