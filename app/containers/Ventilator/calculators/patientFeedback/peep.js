export default function calc(time, userInputs) {
  // Nonsensical Placeholder
  const baseRandomness = Math.random() * 100;
  const aSprinkeOfTime = (time % 60) / 100;
  const aDashOfUserInput = (userInputs.freq || 1) / 10;
  return parseInt(baseRandomness + aSprinkeOfTime, aDashOfUserInput, 10);
}
