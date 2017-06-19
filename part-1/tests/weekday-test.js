const expect = require('chai').expect;
import weekday from './functions'

describe('weekday', () => {

    it('is a function', () => {
        expect(weekday).to.be.a('function')
    })

    it('returns a string', () => {
        let date = weekday(new Date(2017, 5, 15))
        expect(date).to.be.a('string')
    })

    it('returns "Invalid Input" when given a null element'), () => {
        let date = weekday(new Date)(null))
        expect(null).to.equal(null);
    })

    it('returns "Thursday" when given a new Date(2017, 5, 15)', () => {
        let date = weekday(new Date(2017, 5, 15))
        expect(date).to.deep.equal('Thu')
    })

    it('returns "Monday" when given a new Date(2017, 5, 19)', () => {
        let date = weekday(new Date(2017, 5, 19))
        expect(date).to.deep.equal('Mon')
    })
}
