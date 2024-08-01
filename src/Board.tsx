import { BoardProps } from 'boardgame.io/react';
import { CheckersState } from './Game';

interface CheckersProps extends BoardProps<CheckersState> {}

export const Board = ({ G, ctx, moves, playerID }: CheckersProps) => {
  return (
    <div>
      <h1>Checkers!</h1>
    </div>
  );
};
