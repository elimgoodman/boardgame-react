import { Game } from "boardgame.io";
import { INVALID_MOVE } from "boardgame.io/core";

export interface TicTacToeState {
  cells: (null | string)[];
}

export const TicTacToe: Game<TicTacToeState> = {
  setup: () => ({ cells: Array(9).fill(null) }),

  turn: {
    moveLimit: 1,
  },

  moves: {
    clickCell: (ctx, id) => {
      if (ctx.G.cells[id] !== null) {
        return INVALID_MOVE;
      }
      ctx.G.cells[id] = ctx.ctx.currentPlayer;
    },
  },

  endIf: (ctx) => {
    if (IsVictory(ctx.G.cells)) {
      return { winner: ctx.currentPlayer };
    }
    if (IsDraw(ctx.G.cells)) {
      return { draw: true };
    }
  },
};

/** Return true if `cells` is in a winning configuration. */
function IsVictory(cells: (string | null)[]): boolean {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isRowComplete = (row: number[]): boolean => {
    const symbols = row.map((i) => cells[i]);
    return symbols.every((i) => i !== null && i === symbols[0]);
  };

  return positions.map(isRowComplete).some((i) => i === true);
}

/** Return true if all `cells` are occupied. */
function IsDraw(cells: (null | string)[]): boolean {
  return cells.filter((c) => c === null).length === 0;
}
