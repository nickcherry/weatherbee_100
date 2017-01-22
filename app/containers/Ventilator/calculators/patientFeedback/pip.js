export default function calc(time, patient, userInputs) {
  // Nonsensical Placeholder
  const baseRandomness = Math.random() * 100;
  const aHintOfPatientInformation = (patient.age / 1000);
  const aSprinkeOfTime = (time % 60) / 100;
  const aDashOfUserInput = userInputs.fi02 / 100;
  return parseInt(baseRandomness + aHintOfPatientInformation + aSprinkeOfTime, aDashOfUserInput, 10);
}
