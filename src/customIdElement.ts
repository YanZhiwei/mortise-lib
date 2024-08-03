import { nextRandomString } from "./utils/string";
const CustomIdAttribute = "mortise_custom_id";
declare global {
  interface HTMLElement {
    setCustomId(): void;
    getCustomId(): string | null;
  }
}
interface HTMLElement {
  setCustomId(): void;
  getCustomId(): string | null;
}

HTMLElement.prototype.setCustomId = function () {
  if (!this.hasAttribute(CustomIdAttribute)) {
    var id = this.tagName.toLowerCase() + "_" + nextRandomString(8);
    console.log("setCustomId", id)
    this.setAttribute(CustomIdAttribute, id);
  }
};

HTMLElement.prototype.getCustomId = function () {
  if (!this.hasAttribute(CustomIdAttribute)) {
    return null;
  }
  return this.getAttribute(CustomIdAttribute);
};
export {};
