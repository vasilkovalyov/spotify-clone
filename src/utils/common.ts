export function splitText(text: string): string {
  //eslint-disable-next-line
  return text.replace(/([&\/-])/g, ' $1 ');
}
