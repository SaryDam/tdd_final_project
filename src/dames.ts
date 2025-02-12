export function nQueens(n: number): string[][] {
    return [];
}

export function initializeBoard(n: number): string[][] {
    const board: string[][] = [];
    for (let i = 0; i < n; i++) {
        board.push(Array(n).fill('.'));
    }
    return board;
}