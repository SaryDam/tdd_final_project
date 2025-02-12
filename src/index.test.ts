import {initializeBoard, verifDamier, verifReinesAttaqueUnique} from "./dames";

describe('nQueens', () => {
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
        {
            taille: 4,
            plateauDeJeu: [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: 2,
            colonne: 2,
            attendu: true,
        },
        {
            taille: 4,
            plateauDeJeu: [
                ["O", "O", "O", "O"],
                ["O", "#", "O", "O"],
                ["O", "O", "#", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: 2,
            colonne: 2,
            attendu: false,
        },
    ])(
        "Vérifie si une reine peut être placée sur une case vide pour un échiquier de taille $taille",
        ({ taille, plateauDeJeu, ligne, colonne, attendu }) => {
            expect(verifDamier(plateauDeJeu, ligne, colonne, taille)).toBe(attendu);
        }
    );

    it.each([
        {
            taille: 4,
            plateauDeJeu: [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: -1,
            colonne: 2,
            attendu: false,
        },
        {
            taille: 4,
            plateauDeJeu: [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: 4,
            colonne: 1,
            attendu: false,
        },
        {
            taille: 4,
            plateauDeJeu: [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: 2,
            colonne: -1,
            attendu: false,
        },
        {
            taille: 4,
            plateauDeJeu: [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: 2,
            colonne: 4,
            attendu: false,
        },
        {
            taille: 4,
            plateauDeJeu: [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: 1,
            colonne: 1,
            attendu: true,
        },
    ])(
        'Vérifie que la reine ne peut pas être placée en dehors du tableau (échiquier de taille $taille)',
        ({ taille, plateauDeJeu, ligne, colonne, attendu }) => {
            expect(verifDamier(plateauDeJeu, ligne, colonne, taille)).toBe(attendu);
        }
    );


    it.each([
        {
            taille: 4,
            plateauDeJeu: [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: 2,
            colonne: 2,
            attendu: true,
        },
        {
            taille: 4,
            plateauDeJeu: [
                ["O", "O", "O", "O"],
                ["O", "#", "O", "O"],
                ["#", "O", "O", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: 2,
            colonne: 2,
            attendu: false,
        },
        {
            taille: 4,
            plateauDeJeu: [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "#", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: 2,
            colonne: 1,
            attendu: false,
        },
        {
            taille: 4,
            plateauDeJeu: [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["#", "O", "0", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: 2,
            colonne: 3,
            attendu: false,
        },
    ])(
        "Vérifie si une reine peut être placée en ($ligne, $colonne) sur un échiquier de taille $taille",
        ({ taille, plateauDeJeu, ligne, colonne, attendu }) => {
            expect(verifDamier(plateauDeJeu, ligne, colonne, taille)).toBe(attendu);
        }
    );

    it.each([
        {
            plateauDeJeuAttendu: [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: 3,
            colonne: 2,
            taille: 4,
            attendu: true,
        },
        {
            plateauDeJeuAttendu: [
                ["O", "O", "O", "O"],
                ["O", "#", "O", "O"],
                ["#", "O", "O", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: 1,
            colonne: 3,
            taille: 4,
            attendu: false,
        },
        {
            plateauDeJeuAttendu: [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["#", "O", "0", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: 1,
            colonne: 4,
            taille: 4,
            attendu: false,
        },
    ])(
        'quand je place une reine à la position ($ligne,$colonne) sur un échiquier de taille $taille, alors la fonction renvoie $attendu.',
        ({ plateauDeJeuAttendu, ligne, colonne, taille, attendu }) => {
            const result = verifDamier(plateauDeJeuAttendu, ligne, colonne, taille);

            expect(result).toBe(attendu);
        },
    );
    it.each([
        {
            taille: 4,
            plateauDeJeu: [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: 1,
            colonne: 1,
            attendu: true,
        },
        {
            taille: 4,
            plateauDeJeu: [
                ["O", "O", "O", "O"],
                ["O", "#", "O", "O"],
                ["#", "O", "O", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: 1,
            colonne: 1,
            attendu: false,
        },
        {
            taille: 4,
            plateauDeJeu: [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["#", "O", "#", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: 2,
            colonne: 2,
            attendu: false,
        },
        {
            taille: 4,
            plateauDeJeu: [
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "#", "O", "O"],
                ["O", "O", "O", "O"],
            ],
            ligne: 1,
            colonne: 3,
            attendu: true,
        },
        {
            taille: 4,
            plateauDeJeu: [
                ["O", "O", "O", "O"],
                ["O", "#", "O", "O"],
                ["O", "O", "O", "O"],
                ["#", "O", "O", "O"],
            ],
            ligne: 3,
            colonne: 3,
            attendu: false,
        },
    ])(
        'Vérifie si une reine peut être placée à la position ($ligne, $colonne) sur un échiquier de taille $taille avec les diagonales',
        ({ taille, plateauDeJeu, ligne, colonne, attendu }) => {
            expect(verifDamier(plateauDeJeu, ligne, colonne, taille)).toBe(attendu);
        }
    );
})
describe('Configuration des Reines à Attaque Unique', () => {
    it.each([
        {
            n: 4,
            plateau: [
                ["O", "O", "O", "#"],
                ["O", "O", "O", "O"],
                ["#", "O", "O", "O"],
                ["O", "O", "O", "O"],
            ],
            attendu: false,
        },
        {
            n: 4,
            plateau: [
                ["O", "O", "O", "O"],
                ["O", "#", "O", "O"],
                ["O", "O", "#", "O"],
                ["O", "O", "O", "O"],
            ],
            attendu: true,
        },
        {
            n: 4,
            plateau: [
                ["O", "#", "O", "O"],
                ["O", "O", "O", "O"],
                ["O", "O", "O", "O"],
                ["#", "O", "O", "O"],
            ],
            attendu: false,
        },
    ])(
        'Vérifie si les reines s\'attaquent dans une configuration de taille $n',
        ({ n, plateau, attendu }) => {
            expect(verifReinesAttaqueUnique(plateau, n)).toBe(attendu);
        }
    );
});