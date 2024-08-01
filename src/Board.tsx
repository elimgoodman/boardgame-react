import { BoardProps } from 'boardgame.io/react';
import { CheckersState, Color, Piece } from './Game';
import { useState } from 'react';

interface CheckersProps extends BoardProps<CheckersState> {}

export const Board = ({ G, ctx, moves, playerID }: CheckersProps) => {
  const [selectedCell, setSelectedCell] = useState<null | number>(null);
  const [selectedRow, setSelectedRow] = useState<null | number>(null);

  return (
    <div className="board">
      {G.grid.map((row, rowIdx) => {
        return (
          <div className="row" key={`row-${rowIdx}`}>
            {row.map((cell, cellIdx) => (
              <div
                key={`cell-${cellIdx}`}
                className={`cell ${
                  cell.color === Color.Black ? 'black' : 'white'
                }`}
                onClick={() => {
                  if (cell.piece) {
                    return;
                  }

                  moves.movePiece(selectedCell, selectedRow, cellIdx, rowIdx);
                  setSelectedCell(null);
                  setSelectedRow(null);
                }}
              >
                {cell.piece ? (
                  <div
                    className={`piece ${
                      cell.piece.color === Color.Black ? 'black' : 'white'
                    } ${
                      rowIdx === selectedRow && cellIdx === selectedCell
                        ? 'selected'
                        : ''
                    }`}
                    onClick={() => {
                      setSelectedRow(rowIdx);
                      setSelectedCell(cellIdx);
                    }}
                  >
                    {rowIdx}
                    {cellIdx}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
