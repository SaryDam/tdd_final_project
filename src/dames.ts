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
    if (board[row][col] !== "O") return false; // La case doit être vide

    for (let j = 0; j < n; j++) {
        if (j !== col && board[row][j] === "#") return false; // Il ne doit pas y avoir de reine sur la même ligne
    }

    for (let i = 0; i < n; i++) {
        if (i !== row && board[i][col] === "#") return false; // Il ne doit pas y avoir de reine sur la même colonne
    }

    for (let i = 0; i < n; i++) {
        const j = col - row + i;
        if (j >= 0 && j < n && i !== row && board[i][j] === "#") {
            return false;
        }
    }

    for (let i = 0; i < n; i++) {
        const j = col + row - i;
        if (j >= 0 && j < n && i !== row && board[i][j] === "#") {
            return false;
        }
    }

    return true;
}
