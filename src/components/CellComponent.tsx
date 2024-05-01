import { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  handleClick: (cell: Cell) => void;
}

export const CellComponent: FC<CellProps> = ({ cell, selected, handleClick }) => {
  console.log(cell)
  return (
    <div
      className={[
        'cell',
        cell.color,
        selected ? 'selected' : '',
        cell.available ? (cell.figure ? 'attackable' : 'available') : '',
      ].filter(el => el).join(' ')}
      onClick={() => handleClick(cell)}
    >
      {cell.figure?.logo && <img src={cell.figure.logo} />}
    </div>
  )
}
