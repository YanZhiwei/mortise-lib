import $ from "jquery";
interface HTMLElement {
  getUrl(): string;
  getTitle(): string;
  getValue(): string;
  isVisible(): boolean;
  isLeaf(): boolean;
  isFrame(): boolean;
  isMainFrame(): boolean;
  isChecked(): boolean;
  getFrameIndex(): number;
}
HTMLElement.prototype.getUrl = function () {
  var elem = $(this);
  if (elem[0] && elem[0].ownerDocument) {
    return elem[0].ownerDocument.URL;
  }
  return "";
};

HTMLElement.prototype.getTitle = function () {
  if (this.isFrame()) {
    try {
      const iframeTitle = (this as HTMLIFrameElement)?.contentWindow?.document
        .title;
      return iframeTitle == undefined ? "" : iframeTitle;
    } catch (e) {
      return "";
    }
  }
  return this.title;
};

HTMLElement.prototype.getValue = function () {
  const tagName = this.tagName.toLowerCase();
  if (tagName == "input" || tagName === "textarea") {
    return (this as HTMLInputElement).value;
  }
  const attrValue = $(this).attr("value");
  return attrValue == undefined ? "" : attrValue;
};

HTMLElement.prototype.isVisible = function (): boolean {
  const elem = $(this);
  if (!elem.is(":visible") || elem.css("visibility") === "hidden") {
    return false;
  }
  return true;
};

HTMLElement.prototype.isLeaf = function (): boolean {
  const elem = $(this);
  if (elem?.children()?.length === 0) {
    return true;
  }
  return this.children
    ? this.children.length === 0
    : this.childNodes.length === 0;
};

HTMLElement.prototype.isFrame = function (): boolean {
  const tagName = this.tagName.toLowerCase();
  return tagName === "iframe" || tagName === "frame";
};

HTMLElement.prototype.isMainFrame = function (): boolean {
  return this.tagName.toLowerCase() === "html";
};

HTMLElement.prototype.isChecked = function (): boolean {
  const tagName = this.tagName.toLowerCase();
  if (tagName === "input") {
    const e = this as HTMLInputElement;
    if (e.type === "checkbox" || e.type === "radio") {
      return e.checked;
    }
  }
  return false;
};

HTMLElement.prototype.getFrameIndex = function (): number {
  let index = -1;
  const elem = this;
  let allIframes: HTMLElement[] = [];
  const iframes = $("iframe").get();
  if (iframes.length > 0) {
    allIframes.push(...iframes);
  }
  const frames = $("frame").get();
  if (frames.length > 0) {
    allIframes.push(...frames);
  }

  for (let i = 0; i < allIframes.length; i++) {
    if (allIframes[i] === elem) {
      index = i;
      break;
    }
  }
  return index;
};
export {};
