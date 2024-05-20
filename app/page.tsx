'use client'

export default function Home() {
  function handleAuthenticate() {
    window.location.href = "/Login";
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <button
        onClick={handleAuthenticate}
        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Start Authentication
      </button>
    </main>
  );
}
