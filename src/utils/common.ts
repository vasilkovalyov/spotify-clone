export function splitText(text: string): string {
  //eslint-disable-next-line
  return text.replace(/([&\/-])/g, ' $1 ');
}

export function convertTrackTime(duration: number) {
  const totalSeconds = Math.floor(duration / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}
