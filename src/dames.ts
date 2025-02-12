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

export function verifDamier(board: string[][], row: number, col: number, n: number): boolean {
    return board[row][col] === "O";
}
