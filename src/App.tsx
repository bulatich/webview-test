import { useMemo } from "react";
import type { CSSProperties } from "react";
import useOnlineStatus from "./hooks/useOnlineStatus";
import { getPlatform } from "./utils/platform";

const quickActions = [
  { title: "Сканирование", subtitle: "QR, NFC, штрихкоды", meta: "1 сенс., мгновенно" },
  { title: "Офлайн-кэш", subtitle: "Последние 4 дня", meta: "Синхронный доступ" },
  { title: "Фокус", subtitle: "Только важные уведомления", meta: "Без вибрации" }
];

const infoCards = [
  {
    title: "Системный монитор",
    body: "Android WebView 122 / iOS WKWebView 18.4 — оптимизировано для стабильности и плавных переходов.",
    badge: "Облачная синхронизация"
  },
  {
    title: "Навигация",
    body: "Поддерживаются жесты назад, свайпы по Safe Area и автоматическая адаптация к панели жестов и soft chrome.",
    badge: "Gesture-aware"
  }
];

const navLinks = ["Главная", "Уведомления", "Голосовой", "Профиль"];

type AccentStyle = CSSProperties & { "--accent"?: string };

export default function App() {
  const platform = getPlatform();
  const online = useOnlineStatus();
  const timeLabel = useMemo(
    () =>
      new Date().toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit"
      }),
    []
  );

  const accentColor = platform === "ios" ? "#5ac8fa" : "#3ddc84";
  const accentStyle: AccentStyle = { "--accent": accentColor };
  const shellGradient =
    platform === "ios"
      ? "bg-gradient-to-b from-white/10 via-black/60 to-black/80"
      : "bg-gradient-to-b from-black/60 via-slate-900/60 to-black/90";
  const heroGradient =
    platform === "ios" ? "from-white/15 to-black/60" : "from-slate-800/60 to-slate-950/70";

  const safeAreaStyle = {
    paddingTop: "env(safe-area-inset-top, 1rem)",
    paddingBottom: "env(safe-area-inset-bottom, 1rem)"
  };

  return (
    <div className="min-h-screen w-full bg-[#03050a] flex items-center justify-center px-4 py-6">
      <div
        className={`relative w-full max-w-md rounded-[34px] border border-white/10 shadow-[0_35px_70px_rgba(0,0,0,0.7)] backdrop-blur-[18px] overflow-hidden ${shellGradient}`}
        style={accentStyle}
      >
        <div className="flex min-h-[100svh] flex-col gap-5 px-5" style={safeAreaStyle}>
          <header className="flex items-center justify-between text-[0.8rem] uppercase tracking-[0.25rem] text-white/80">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-xs tracking-[0.35rem]">LTE 5G</span>
              <span aria-hidden className="text-xs">
                ▮▮▮▯
              </span>
            </div>
            <strong className="text-base tracking-[0.45rem]">{timeLabel}</strong>
            <span
              className={`px-4 py-1 rounded-full border border-white/30 text-[0.65rem] font-semibold tracking-[0.3rem] uppercase ${
                online ? "text-[var(--accent)]" : "text-[#ff7777]"
              }`}
            >
              {online ? "Синхронизировано" : "Отключено"}
            </span>
          </header>

          <main className="flex flex-1 flex-col gap-5 pb-4 text-white">
            <section
              className={`border border-white/10 rounded-[26px] bg-gradient-to-br ${heroGradient} px-6 py-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]`}
            >
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.4rem] text-white/70">Webview like</p>
                <h1 className="mt-1 text-3xl font-semibold leading-tight">SPA, как родное приложение</h1>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  Soft chrome, safe areas, богатые жесты и анимации делают это приложение идеальной оболочкой для Android и iOS
                  WebView.
                </p>
              </div>
              <div className="mt-6 flex flex-col items-end gap-1 text-sm text-white/80">
                <span className="text-xs uppercase tracking-[0.35rem] text-white/60">Native fluid</span>
                <strong className="text-base">
                  {platform === "ios" ? "iOS WKWebView" : "Android WebView"}
                </strong>
              </div>
            </section>

            <section className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3">
              {quickActions.map((action) => (
                <article
                  key={action.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium leading-snug transition duration-300 hover:-translate-y-0.5 hover:border-white/20"
                >
                  <p className="text-base font-semibold">{action.title}</p>
                  <p className="mt-1 text-xs text-white/70">{action.subtitle}</p>
                  <span className="mt-3 inline-flex text-[0.65rem] tracking-[0.25rem] text-[var(--accent)]">
                    {action.meta}
                  </span>
                </article>
              ))}
            </section>

            <section className="flex flex-col gap-3 text-sm">
              {infoCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-black/40 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
                >
                  <span className="text-[0.6rem] uppercase tracking-[0.35rem] text-white/60">{card.badge}</span>
                  <h2 className="mt-1 text-lg font-semibold">{card.title}</h2>
                  <p className="mt-2 text-white/70 leading-relaxed">{card.body}</p>
                </article>
              ))}
            </section>
          </main>

          <nav className="mt-auto flex items-center gap-3 text-xs uppercase tracking-[0.25rem] text-white/70">
            {navLinks.map((link) => (
              <button
                key={link}
                type="button"
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 font-semibold uppercase transition hover:border-white/20"
              >
                {link}
              </button>
            ))}
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-black shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
              aria-label="Новая запись"
            >
              +
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
