import $ from "jquery";

declare global {
  interface HTMLIFrameElement {
    getUrl(): string;
  }
}

interface HTMLIFrameElement {
  getUrl(): string;
}

HTMLIFrameElement.prototype.getUrl = function (): string {
  const iframe = this;
  let url = "";
  try {
    url = iframe.src;
    const href = iframe.contentWindow?.location.href;
    if (href !== undefined && url !== href) {
      url = href;
    }
  } catch (e) {
    url = "";
  }
  return url;
};

export {};
