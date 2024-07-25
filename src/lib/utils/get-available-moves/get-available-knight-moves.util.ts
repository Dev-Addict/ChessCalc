import {Board, PiecePosition, Piece} from '../../types';
import {
	ROW_TO_NUMBER,
	COLUMN_TO_NUMBER,
	NUMBER_TO_ROW,
	NUMBER_TO_COLUMN,
} from '../converters';

export const getAvailableKnightMoves = (
	chessBoard: Board,
	position: PiecePosition,
	piece: Piece
): PiecePosition[] => {
	const result: PiecePosition[] = [];

	const rowNumber = ROW_TO_NUMBER[position.row];
	const columnNumber = COLUMN_TO_NUMBER[position.column];

	function addPosition(
		positionRowNumber: number,
		positionColumnNumber: number
	) {
		if (positionRowNumber < 1 || positionRowNumber > 8) return;
		if (positionColumnNumber < 1 || positionColumnNumber > 8) return;

		const positionRow = NUMBER_TO_ROW[positionRowNumber];
		const positionColumn = NUMBER_TO_COLUMN[positionColumnNumber];

		const positionPiece = chessBoard[positionRow][positionColumn].piece;

		if ((positionPiece && piece.color != positionPiece.color) || !positionPiece)
			result.push({
				row: positionRow,
				column: positionColumn,
			});
	}

	for (const singleDifference of [-1, 1])
		for (const doubleDifference of [-2, 2]) {
			addPosition(
				rowNumber + doubleDifference,
				columnNumber + singleDifference
			);
			addPosition(
				rowNumber + singleDifference,
				columnNumber + doubleDifference
			);
		}

	return result;
};
