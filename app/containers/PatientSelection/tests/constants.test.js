/* Third-Party Dependencies */
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

/* App Dependencies */
import { PATIENTS } from '../constants';

/* Setup */
const expect = chai.expect;
chai.use(chaiImmutable);

describe('PATIENTS', () => {
  it('should define required values for each patient', () => {
    PATIENTS.forEach((patient) => {
      expect(patient.get('age')).to.be.a('number');
      expect(patient.get('description')).to.be.a('string');
      expect(patient.get('gender')).to.be.a('string');
      expect(patient.get('id')).to.be.a('number');
      expect(patient.get('name')).to.be.a('string');
      expect(patient.get('unlocked')).to.be.a('boolean');
    });
  });
});
