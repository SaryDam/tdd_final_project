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
    if (row < 0 || row >= n || col < 0 || col >= n) {
        return false;
    }

    if (board[row][col] !== "O") return false;

    for (let j = 0; j < n; j++) {
        if (j !== col && board[row][j] === "#") return false;
    }

    for (let i = 0; i < n; i++) {
        if (i !== row && board[i][col] === "#") return false;
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
