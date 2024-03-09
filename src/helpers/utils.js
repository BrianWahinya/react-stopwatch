export const format = (time) => {
  let hrs = Math.floor(time / (1000 * 60 * 60));
  let mins = Math.floor((time / (1000 * 60)) % 60);
  let secs = Math.floor((time / 1000) % 60);
  let mill = Math.floor((time % 1000) / 10);

  hrs = String(hrs).padStart(2, "0");
  mins = String(mins).padStart(2, "0");
  secs = String(secs).padStart(2, "0");
  mill = String(mill).padStart(2, "0");

  return `${hrs}:${mins}:${secs}:${mill}`;
};
