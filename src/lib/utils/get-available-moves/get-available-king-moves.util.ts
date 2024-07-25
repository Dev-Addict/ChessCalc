import {Board, PiecePosition, Piece} from '../../types';
import {
	ROW_TO_NUMBER,
	COLUMN_TO_NUMBER,
	NUMBER_TO_COLUMN,
	NUMBER_TO_ROW,
} from '../converters';

export const getAvailableKingMoves = (
	chessBoard: Board,
	position: PiecePosition,
	piece: Piece
): PiecePosition[] => {
	const result: PiecePosition[] = [];

	const rowNumber = ROW_TO_NUMBER[position.row];
	const columnNumber = COLUMN_TO_NUMBER[position.column];

	for (let i = -1; i <= 1; i++)
		for (let j = -1; j <= 1; j++) {
			const positionRowNumber = rowNumber + i;
			const positionColumnNumber = columnNumber + j;

			if (positionRowNumber < 1 || positionRowNumber > 8) continue;
			if (positionColumnNumber < 1 || positionColumnNumber > 8) continue;

			const positionRow = NUMBER_TO_ROW[positionRowNumber];
			const positionColumn = NUMBER_TO_COLUMN[positionColumnNumber];

			const positionPiece = chessBoard[positionRow][positionColumn].piece;

			if (
				(positionPiece && piece.color != positionPiece.color) ||
				!positionPiece
			)
				result.push({
					row: positionRow,
					column: positionColumn,
				});
		}

	return result;
};
