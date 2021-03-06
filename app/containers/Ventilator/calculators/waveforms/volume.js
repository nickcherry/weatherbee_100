export default function calc(time, patient, userInputs) {
  // Nonsensical Placeholder
  const baseWave = (Math.sin(time) * 50) + 50;
  const aHintOfPatientInformation = (patient.age / 1000);
  const aDashOfUserInput = userInputs.fi02 / 100;
  return baseWave + aHintOfPatientInformation + aDashOfUserInput;
}
