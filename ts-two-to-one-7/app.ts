export class G964 {
  public static longest = (s1: string, s2: string): string => {
    const stringSet = new Set(s1.split("").concat(s2.split("")));

    return Array.from(stringSet.values()).sort().join("");
  };
}
