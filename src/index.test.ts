import {nQueens} from "./dames";

describe('nQueens', () => {
    it('retourne un tableau vide, si n = 0', () => {
        expect(nQueens(0)).toEqual([]);
    });
})