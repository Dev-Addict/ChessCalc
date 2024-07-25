import {
	ROW_TO_NUMBER,
	COLUMN_TO_NUMBER,
	NUMBER_TO_ROW,
	NUMBER_TO_COLUMN,
} from '../converters';
import {Board, PiecePosition, Piece, Color} from '../../types';

// Todo: Add En Passant
// Todo: Add Pawn Promotion

export const getAvailablePawnMoves = (
	chessBoard: Board,
	position: PiecePosition,
	piece: Piece
): PiecePosition[] => {
	const result: PiecePosition[] = [];

	{
		const to: PiecePosition = {
			row: NUMBER_TO_ROW[
				ROW_TO_NUMBER[position.row] + (piece.color === Color.WHITE ? 1 : -1)
			],
			column: position.column,
		};

		if (!chessBoard[to.row][to.column].piece) result.push(to);
	}

	outer: {
		if (piece.moved) break outer;

		for (let i = 1; i <= 2; i++) {
			const to: PiecePosition = {
				row: NUMBER_TO_ROW[
					ROW_TO_NUMBER[position.row] +
						(piece.color === Color.WHITE ? i : -1 * i)
				],
				column: position.column,
			};

			if (chessBoard[to.row][to.column].piece) break outer;
		}

		const to: PiecePosition = {
			row: NUMBER_TO_ROW[
				ROW_TO_NUMBER[position.row] + (piece.color === Color.WHITE ? 2 : -2)
			],
			column: position.column,
		};

		result.push(to);
	}

	{
		for (const i of [-1, 1]) {
			const columnNumber = COLUMN_TO_NUMBER[position.column] + i;

			if (columnNumber < 1 || columnNumber > 8) continue;

			const to: PiecePosition = {
				row: NUMBER_TO_ROW[
					ROW_TO_NUMBER[position.row] + (piece.color === Color.WHITE ? 1 : -1)
				],
				column: NUMBER_TO_COLUMN[columnNumber],
			};

			if (
				chessBoard[to.row][to.column].piece &&
				chessBoard[to.row][to.column].piece?.color !== piece.color
			)
				result.push(to);
		}
	}

	return result;
};
