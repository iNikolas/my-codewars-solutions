export function isIsogram(str: string): boolean {
  return new Set(str.toLowerCase().split("")).size === str.length;
}
