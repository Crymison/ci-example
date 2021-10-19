const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });
    });

    describe('gerarNumeroAleatorio', () => {
        test('Inicio nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(-5, 25))
                .toBe(-1);
        });
    });

    describe('gerarNumeroAleatorio', () => {
        test('Inicio nao pode ser maior que fim', () => {
            expect(gerarNumeroAleatorio(40, 25))
                .toBe(-1);
        });
    });

    describe('gerarNumeroAleatorio', () => {
        test('Inicio nao pode ser float', () => {
            expect(gerarNumeroAleatorio(5.4, 25))
                .toBe(-1);
        });
    });
    describe('gerarNumeroAleatorio', () => {
        test('Fim nao pode ser float', () => {
            expect(gerarNumeroAleatorio(2, 25.2))
                .toBe(-1);
        });
    });

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });
    });
});