import { Client } from 'boardgame.io/react';
import { Local } from 'boardgame.io/multiplayer';
import { Checkers } from './Game';
import { Board } from './Board';

export default Client({ game: Checkers, board: Board, multiplayer: Local() });
