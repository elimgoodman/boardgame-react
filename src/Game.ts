import { Game } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';

export enum Color {
  Black,
  White,
}

export interface Piece {
  color: Color;
  isKing: boolean;
}

interface Cell {
  color: Color;
  piece: Piece | null;
}

export interface CheckersState {
  grid: Array<Cell[]>;
}

export const Checkers: Game<CheckersState> = {
  moves: {
    movePiece: ({ G, ctx }, selectedCell, selectedRow, destCell, destRow) => {
      // TODO: validate move!
      // - does the current player own the piece in question?
      // - is the move diagonal?
      // - is it one square in the right direction?
      // - is the destination empty?
      const piece = G.grid[selectedRow][selectedCell].piece;

      const allowedPieceColor =
        ctx.currentPlayer === '0' ? Color.Black : Color.White;

      if (piece?.color !== allowedPieceColor) {
        return INVALID_MOVE;
      }

      const validRow =
        piece?.color === Color.Black ? selectedRow + 1 : selectedRow - 1;
      const validCells = [selectedCell - 1, selectedCell + 1].filter(
        (v) => v >= 0 && v <= 7
      );

      if (destRow !== validRow) {
        return INVALID_MOVE;
      }

      if (!validCells.includes(destCell)) {
        return INVALID_MOVE;
      }

      G.grid[selectedRow][selectedCell].piece = null;
      G.grid[destRow][destCell].piece = piece;
    },
  },

  turn: {
    minMoves: 1,
    maxMoves: 1,
  },

  setup() {
    return {
      grid: [
        [
          {
            color: Color.Black,
            piece: { color: Color.Black, isKing: false },
          },
          { color: Color.White, piece: null },
          {
            color: Color.Black,
            piece: { color: Color.Black, isKing: false },
          },
          { color: Color.White, piece: null },
          {
            color: Color.Black,
            piece: { color: Color.Black, isKing: false },
          },
          { color: Color.White, piece: null },
          {
            color: Color.Black,
            piece: { color: Color.Black, isKing: false },
          },
          { color: Color.White, piece: null },
        ],
        [
          {
            color: Color.White,
            piece: null,
          },
          {
            color: Color.Black,
            piece: { color: Color.Black, isKing: false },
          },
          {
            color: Color.White,
            piece: null,
          },
          {
            color: Color.Black,
            piece: { color: Color.Black, isKing: false },
          },
          {
            color: Color.White,
            piece: null,
          },
          {
            color: Color.Black,
            piece: { color: Color.Black, isKing: false },
          },
          {
            color: Color.White,
            piece: null,
          },
          {
            color: Color.Black,
            piece: { color: Color.Black, isKing: false },
          },
        ],
        [
          {
            color: Color.Black,
            piece: { color: Color.Black, isKing: false },
          },
          { color: Color.White, piece: null },
          {
            color: Color.Black,
            piece: { color: Color.Black, isKing: false },
          },
          { color: Color.White, piece: null },
          {
            color: Color.Black,
            piece: { color: Color.Black, isKing: false },
          },
          { color: Color.White, piece: null },
          {
            color: Color.Black,
            piece: { color: Color.Black, isKing: false },
          },
          { color: Color.White, piece: null },
        ],
        [
          { color: Color.White, piece: null },
          { color: Color.Black, piece: null },
          { color: Color.White, piece: null },
          { color: Color.Black, piece: null },
          { color: Color.White, piece: null },
          { color: Color.Black, piece: null },
          { color: Color.White, piece: null },
          { color: Color.Black, piece: null },
        ],
        [
          { color: Color.Black, piece: null },
          { color: Color.White, piece: null },
          { color: Color.Black, piece: null },
          { color: Color.White, piece: null },
          { color: Color.Black, piece: null },
          { color: Color.White, piece: null },
          { color: Color.Black, piece: null },
          { color: Color.White, piece: null },
        ],
        [
          { color: Color.White, piece: null },
          {
            color: Color.Black,
            piece: { color: Color.White, isKing: false },
          },
          { color: Color.White, piece: null },
          {
            color: Color.Black,
            piece: { color: Color.White, isKing: false },
          },
          { color: Color.White, piece: null },
          {
            color: Color.Black,
            piece: { color: Color.White, isKing: false },
          },
          { color: Color.White, piece: null },
          {
            color: Color.Black,
            piece: { color: Color.White, isKing: false },
          },
        ],
        [
          {
            color: Color.Black,
            piece: { color: Color.White, isKing: false },
          },
          {
            color: Color.White,
            piece: null,
          },
          {
            color: Color.Black,
            piece: { color: Color.White, isKing: false },
          },
          {
            color: Color.White,
            piece: null,
          },
          {
            color: Color.Black,
            piece: { color: Color.White, isKing: false },
          },
          {
            color: Color.White,
            piece: null,
          },
          {
            color: Color.Black,
            piece: { color: Color.White, isKing: false },
          },
          {
            color: Color.White,
            piece: null,
          },
        ],
        [
          { color: Color.White, piece: null },
          {
            color: Color.Black,
            piece: { color: Color.White, isKing: false },
          },
          { color: Color.White, piece: null },
          {
            color: Color.Black,
            piece: { color: Color.White, isKing: false },
          },
          { color: Color.White, piece: null },
          {
            color: Color.Black,
            piece: { color: Color.White, isKing: false },
          },
          { color: Color.White, piece: null },
          {
            color: Color.Black,
            piece: { color: Color.White, isKing: false },
          },
        ],
      ],
    };
  },
};
