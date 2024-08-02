import { nextRandomString } from "./utils/string";
interface CustomIdElement extends HTMLElement {
  customId: string;
  getCustomId(): string;
}
