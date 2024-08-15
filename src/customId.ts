import { nextRandomString } from "./utils/string";
class CustomId {
  private _cache: { [key: string]: Element } = {};
  public static Prefix: string = "mortise_custom_id";
  private _customId: number = 0;
  private _unique: string = "";
  public constructor() {
    this._unique = nextRandomString(8);
  }

  public set(element: Element): string | null {
    if (!element) return null;
    if (element.hasAttribute(CustomId.Prefix)) {
      return element.getAttribute(CustomId.Prefix);
    }
    this._customId++;
    const customId =
      CustomId.Prefix + "_" + this._unique + "_" + this._customId;
    element.setAttribute(CustomId.Prefix, customId);
    this._cache[customId] = element;
    return customId;
  }

  public get(element: Element): string | null {
    if (!element) return null;
    if (element.hasAttribute(CustomId.Prefix)) {
      return element.getAttribute(CustomId.Prefix);
    }
    return null;
  }
}

export default CustomId;
