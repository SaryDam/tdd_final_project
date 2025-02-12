import {initializeBoard, nQueens, verifDamier} from "./dames";

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
    it.each([
        [
            4,
            [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
            ],
            2, 2, true
        ],
        [
            4,
            [
                ["O", "O", "O", "O"],
                ["O", "#", "O", "O"],
                ["O", "O", "#", "O"],
                ["O", "O", "O", "O"],
            ],
            2, 2, false
        ]
    ])(
        "Vérifie si une reine peut être placée sur une case vide pour un échiquier de taille %i",
        (_n, board, row, col, expected) => {
            expect(verifDamier(board, row, col, _n)).toBe(expected);
        }
    );
    it.each([
        [
            4,
            [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
            ],
            2, 2, true
        ],
        [
            4,
            [
                ["O", "O", "O", "O"],
                ["O", "#", "O", "O"],
                ["#", "O", "O", "O"],
                ["O", "O", "O", "O"],
            ],
            2, 2, false
        ],
        [
            4,
            [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "#", "O"],
                ["O", "O", "O", "O"],
            ],
            2, 1, false
        ],
        [
            4,
            [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["#", "O", "0", "O"],
                ["O", "O", "O", "O"],
            ],
            2, 3, false
        ]
    ])(
        "Vérifie si une reine peut être placée en (%i, %i) sur un échiquier de taille %i",
        (_n, board, row, col, expected) => {
            expect(verifDamier(board, row, col, _n)).toBe(expected);
        }
    );


})