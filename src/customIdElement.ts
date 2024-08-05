import { nextRandomString } from "./utils/string";
import $ from "jquery";
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
  if ($(this).attr(CustomIdAttribute) == undefined) {
    var id = this.tagName.toLowerCase() + "_" + nextRandomString(8);
    $(this).attr(CustomIdAttribute, id);
  }
};

HTMLElement.prototype.getCustomId = function () {
  const atrrValue = $(this).attr(CustomIdAttribute);
  return atrrValue == undefined ? "" : atrrValue;
};
export {};
