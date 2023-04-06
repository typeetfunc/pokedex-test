export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function isString(value: unknown): value is string {
  return typeof value === "string" || value instanceof String;
}
