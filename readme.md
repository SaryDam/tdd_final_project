# N-Queens Problem - Advanced Chess Configurations Exam

## Part 1: Classic N-Queens Problem

The N-Queens puzzle requires placing N queens on an N×N chessboard so that no two queens can attack each other.  
A queen can attack pieces on the same row, column, or diagonal.

For this exam, you need to create a program that:

- Takes an integer N as input
- Returns **ALL** distinct solutions to the N-queens puzzle
- Represents the solutions using 'O' for empty squares and '#' for queens

---

### Example:

```plaintext
Input: n = 4
Output:
[
  [
    "O#OO",
    "OOO#",
    "#OOO",
    "OO#O"
  ],
  [
    "OO#O",
    "#OOO",
    "OOO#",
    "O#OO"
  ]
]
