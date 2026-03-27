const userAgent = typeof navigator === "undefined" ? "" : navigator.userAgent.toLowerCase();

export type PlatformName = "android" | "ios" | "desktop";

export function getPlatform(): PlatformName {
  if (/ipad|iphone|ipod/.test(userAgent)) {
    return "ios";
  }

  if (/android/.test(userAgent)) {
    return "android";
  }

  return "desktop";
}
