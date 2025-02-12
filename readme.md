# Projet Reines Attaquantes

Ce projet vérifie les configurations de reines sur un échiquier pour déterminer si elles s'attaquent selon les règles spécifiées.

## Prérequis

Avant de pouvoir exécuter les tests, vous devez avoir les outils suivants installés sur votre machine :

- **Node.js** (version 14 ou supérieure)
- **npm** (Node Package Manager)

Vous pouvez vérifier si Node.js et npm sont installés en exécutant les commandes suivantes :

```bash
node -v
npm -v
```

## Installation

1. installez les dépendances nécessaires pour exécuter les tests :

```bash
npm install
```

## Lancer les tests

1. Une fois les dépendances installées, vous pouvez exécuter les tests en utilisant la commande suivante :

```
npm test
```

---------------------------------------------------------------


# N-Queens Problem - Advanced Chess Configurations Exam

## Part 1: Classic N-Queens Problem

The N-Queens puzzle requires placing N queens on an N×N chessboard so that no two queens can attack each other. A queen can attack pieces on the same row, column, or diagonal.
For this exam, you need to create a program that:

Takes an integer N as input
Returns ALL distinct solutions to the N-queens puzzle
Represents the solutions using 'O' for empty squares and '#' for queens

---

Example:
```
Input: n = 4
Output: [
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
```

--- 

## Part 2: Single-Attack Queens Configuration

Problem Description
Find all possible configurations where each queen attacks exactly one other queen on an 4×4 board. A configuration is valid if:

Each queen attacks exactly one other queen
Each queen is attacked by exactly one other queen
Queens can attack along rows, columns, or diagonals

Here you don't need to find N queen

Example for N = 5:
```
```
[
[
"OOO#O",
"OOOO#",
"#OOOO",
"OOOOO",
"#OOOO"
]
]
```
 