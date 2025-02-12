import {initializeBoard, nQueens} from "./dames";

describe('nQueens', () => {
    it('retourne un tableau vide, si n = 0', () => {
        expect(nQueens(0)).toEqual([]);
    });
    it.each([
        [1, [['.']]],
        [2, [['.', '.'], ['.', '.']]],
        [3, [['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']]],
        [4, [['.', '.', '.', '.'], ['.', '.', '.', '.'], ['.', '.', '.', '.'], ['.', '.', '.', '.']]],
    ])(
        'initialisation du tableau pour n = %i',
        (n, expectedBoard) => {
            const board = initializeBoard(n);
            expect(board).toEqual(expectedBoard);
        }
    );

})