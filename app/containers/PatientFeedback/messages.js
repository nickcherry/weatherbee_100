import { defineMessages } from 'react-intl';

export default defineMessages({
  pip: {
    id: 'app.components.PatientFeedback.pip',
    defaultMessage: 'Peak Inspiratory Pressure (PIP)',
  },
  pipShort: {
    id: 'app.components.PatientFeedback.pipShort',
    defaultMessage: 'PIP',
  },
  pipDescription: {
    id: 'app.components.PatientFeedback.pipShort',
    defaultMessage: 'The amount of pressure needed to reach settings established by the user.',
  },

  map: {
    id: 'app.components.PatientFeedback.map',
    defaultMessage: 'Mean Airway Pressure (MAP)',
  },
  mapShort: {
    id: 'app.components.PatientFeedback.mapShort',
    defaultMessage: 'MAP',
  },
  mapDescription: {
    id: 'app.components.PatientFeedback.mapDescription',
    defaultMessage: 'The average of pressure given over a minute of ventilation.',
  },

  peep: {
    id: 'app.components.PatientFeedback.peep',
    defaultMessage: 'Positive End Exploratory Pressure (PEEP)',
  },
  peepShort: {
    id: 'app.components.PatientFeedback.peepShort',
    defaultMessage: 'PEEP',
  },
  peepDescription: {
    id: 'app.components.PatientFeedback.peepDescription',
    defaultMessage: 'The average of pressure given over a minute of ventilation.',
  },

  ie: {
    id: 'app.components.PatientFeedback.ie',
    defaultMessage: 'Inspiratory to Exploratory Ratio (I:E)',
  },
  ieShort: {
    id: 'app.components.PatientFeedback.ieShort',
    defaultMessage: 'I:E',
  },
  ieDescription: {
    id: 'app.components.PatientFeedback.ieDescription',
    defaultMessage: 'The amount of time spent exhaling versus inhaling.',
  },

  freq: {
    id: 'app.components.PatientFeedback.freq',
    defaultMessage: 'Frequency',
  },
  freqShort: {
    id: 'app.components.PatientFeedback.freqShort',
    defaultMessage: 'Freq',
  },
  freqDescription: {
    id: 'app.components.PatientFeedback.freqDescription',
    defaultMessage: 'The patient\'s respiratory rate per minute.',
  },

  tidalVolume: {
    id: 'app.components.PatientFeedback.tidalVolume',
    defaultMessage: 'Tidal Volume (Vt)',
  },
  tidalVolumeShort: {
    id: 'app.components.PatientFeedback.tidalVolumeShort',
    defaultMessage: 'Vt',
  },
  tidalVolumeDescription: {
    id: 'app.components.PatientFeedback.tidalVolumeDescription',
    defaultMessage: 'The amount of air in ML the patient is receiving per breath.',
  },

  minuteVolume: {
    id: 'app.components.PatientFeedback.minuteVolume',
    defaultMessage: 'Minute Volume (Ve)',
  },
  minuteVolumeShort: {
    id: 'app.components.PatientFeedback.minuteVolumeShort',
    defaultMessage: 'Ve',
  },
  minuteVolumeDescription: {
    id: 'app.components.PatientFeedback.minuteVolumeDescription',
    defaultMessage: 'The amount of air the patient is receiving each minute.',
  },
});
