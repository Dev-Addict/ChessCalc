import {
	ROW_TO_NUMBER,
	COLUMN_TO_NUMBER,
	NUMBER_TO_ROW,
	NUMBER_TO_COLUMN,
} from '../../../converters';
import {Board, PiecePosition, PieceType} from '../../../../types';

export const isKingInCheckByKnight = (
	chessBoard: Board,
	position: PiecePosition
) => {
	for (const singleDifference of [-1, 1])
		for (const doubleDifference of [-2, 2])
			for (const [rowDifference, columnDifference] of [
				[singleDifference, doubleDifference],
				[doubleDifference, singleDifference],
			]) {
				const rowNumber = ROW_TO_NUMBER[position.row] + rowDifference;
				const columnNumber =
					COLUMN_TO_NUMBER[position.column] + columnDifference;

				if (rowNumber < 1 || rowNumber > 8) continue;
				if (columnNumber < 1 || columnNumber > 8) continue;

				const row = NUMBER_TO_ROW[rowNumber];
				const column = NUMBER_TO_COLUMN[columnNumber];

				const piece = chessBoard[row][column].piece;

				if (
					piece?.type === PieceType.KNIGHT &&
					piece?.color !== chessBoard.turn
				)
					return true;
			}

	return false;
};
