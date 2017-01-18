/* Helpers / Services / Constants */
import { SELECT_PATIENT } from './constants';

export function selectPatient(patient) {
  return {
    type: SELECT_PATIENT,
    patient,
  };
}
