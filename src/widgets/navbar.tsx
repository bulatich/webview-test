
export function MobileNavbar() {
  const items = [
    { label: "Home", active: true },
    { label: "Browse", active: false },
    { label: "Inbox", active: false },
    { label: "Profile", active: false },
  ];
  return (
      <div className="min-h-screen bg-zinc-950 text-white pb-20">
        <main className="p-4">
          <div className="mx-auto max-w-md rounded-2xl bg-zinc-900 p-4 ring-1 ring-white/10">
            <h1 className="text-lg font-semibold">Webview App</h1>
            <p className="mt-2 text-sm text-zinc-400">
              Content goes here.
            </p>
          </div>
        </main>

        <nav
            className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-md border-t border-white/10 bg-zinc-900/95 backdrop-blur"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="grid grid-cols-4">
            {items.map((item) => (
                <button
                    key={item.label}
                    className={`flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-medium transition ${
                        item.active ? "text-cyan-400" : "text-zinc-400 hover:text-white"
                    }`}
                >
                  <div className="h-5 w-5 rounded-full border border-current opacity-80" />
                  <span>{item.label}</span>
                </button>
            ))}
          </div>
        </nav>
      </div>
  );
}
