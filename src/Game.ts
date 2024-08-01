import { Game } from 'boardgame.io';

export interface CheckersState {
  cells: (null | string)[];
}

export const Checkers: Game<CheckersState> = {};
