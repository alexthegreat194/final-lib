const converter = require('../src/number');

describe('Number converter', () => {
    it('should convert a number to a phone number', () => {
        expect(converter(1234567890)).toEqual('(123) 456-7890');
    });
    it('should return the number if it is not 10 digits long', () => {
        expect(converter(123)).toEqual("123");
    });
});