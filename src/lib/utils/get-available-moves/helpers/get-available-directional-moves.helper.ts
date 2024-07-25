import {Board, PiecePosition, Piece} from '../../../types';
import {
	ROW_TO_NUMBER,
	COLUMN_TO_NUMBER,
	NUMBER_TO_COLUMN,
	NUMBER_TO_ROW,
} from '../../converters';

export const getAvailableDirectionalMoves = (
	chessBoard: Board,
	position: PiecePosition,
	piece: Piece,
	differences: [number, number][]
): PiecePosition[] => {
	const result: PiecePosition[] = [];

	for (const [rowDifference, columnDifference] of differences)
		for (let i = 1; i < 8; i++) {
			const positionRowNumber = ROW_TO_NUMBER[position.row] + rowDifference * i;
			const positionColumnNumber =
				COLUMN_TO_NUMBER[position.column] + columnDifference * i;

			if (positionRowNumber < 1 || positionRowNumber > 8) break;
			if (positionColumnNumber < 1 || positionColumnNumber > 8) break;

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

			if (positionPiece) break;
		}

	return result;
};
