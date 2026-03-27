import { useEffect, useState } from "react";

const fallbackOnline = typeof navigator !== "undefined" ? navigator.onLine : true;

export default function useOnlineStatus() {
  const [online, setOnline] = useState(fallbackOnline);

  useEffect(() => {
    const update = () => setOnline(navigator.onLine);
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);

  return online;
}
