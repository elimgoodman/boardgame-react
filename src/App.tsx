import { Client } from 'boardgame.io/react';
import { Local } from 'boardgame.io/multiplayer';
import { TicTacToe } from './Game';
import { Board } from './Board';

export default Client({ game: TicTacToe, board: Board, multiplayer: Local() });
