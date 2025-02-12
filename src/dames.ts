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

export function verifReinesAttaqueUnique(board: string[][], n: number): boolean {
    const directions = [
        {row: -1, col: 0},
        {row: 1, col: 0},
        {row: 0, col: -1},
        {row: 0, col: 1},
        {row: -1, col: -1},
        {row: -1, col: 1},
        {row: 1, col: -1},
        {row: 1, col: 1},
    ];

    const attaqueCounts = new Array(n).fill(0);
    const attaquedCounts = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "#") {
                let foundAttacked = false;
                for (let direction of directions) {
                    let x = i;
                    let y = j;

                    while (true) {
                        x += direction.row;
                        y += direction.col;

                        if (x < 0 || x >= n || y < 0 || y >= n) break;

                        if (board[x][y] === "#") {
                            if (foundAttacked) {
                                return false;
                            }
                            foundAttacked = true;
                            attaqueCounts[i]++;
                            attaquedCounts[x]++;
                            break;
                        }
                    }
                }

                if (!foundAttacked) {
                    return false;
                }
            }
        }
    }
    return true
}
