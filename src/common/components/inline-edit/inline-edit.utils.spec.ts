import { addPxSuffix, calculateCoordinateValue } from "./inline-edit.utils";

describe('addPxSuffix', () => {
    it("should return 'px' with a positive number", () => {
        const value: number = 10;
        const result = addPxSuffix(value);

        expect(result).toBe('10px');
    })
    it("should return 'px' with a negative number", () => {
        const value: number = -10;
        const result = addPxSuffix(value);

        expect(result).toBe('-10px');
    })
    it("should return 'px' with a zero", () => {
        const value: number = 0;
        const result = addPxSuffix(value);

        expect(result).toBe('0px');
    })
    it("should return 'px' with a decimal number", () => {
        const value: number = 0.1;
        const result = addPxSuffix(value);

        expect(result).toBe('0.1px');
    })
});

describe('calculateCoordinateValue', () => {
    it("should return the coordinate value multiplied by scale with 'px' suffix", () => {
        const value: number = 5;
        const scale: number = 2;
        const result = calculateCoordinateValue(value, scale);

        expect(result).toBe('10px');
    })
    it("should handle negative values correctly", () => {
        const value: number = -5;
        const scale: number = 2;
        const result = calculateCoordinateValue(value, scale);

        expect(result).toBe('-10px');
    })
    it("should handle negative scales correctly", () => {
        const value: number = 5;
        const scale: number = -2;
        const result = calculateCoordinateValue(value, scale);

        expect(result).toBe('-10px');
    })
    it("should return '0px' when value is '0'", () => {
        const value: number = 0;
        const scale: number = 2;
        const result = calculateCoordinateValue(value, scale);

        expect(result).toBe('0px');
    })
    it("should return correctly when scale is decimal", () => {
        const value: number = 1;
        const scale: number = 1.5;
        const result = calculateCoordinateValue(value, scale);

        expect(result).toBe('1.5px');
    })
});