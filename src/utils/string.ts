function nextRandomString(lenght: number = 8): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
function isWhiteSpaceCharacter(ch: string): boolean {
  return (
    ch === "\t" ||
    ch === "\r" ||
    ch === "\n" ||
    ch === " " ||
    ch === "\u200E" ||
    ch === "\u2022"
  );
}
export { nextRandomString,isWhiteSpaceCharacter };
