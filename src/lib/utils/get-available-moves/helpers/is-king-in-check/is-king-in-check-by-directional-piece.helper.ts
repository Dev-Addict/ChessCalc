import {
	ROW_TO_NUMBER,
	COLUMN_TO_NUMBER,
	NUMBER_TO_ROW,
	NUMBER_TO_COLUMN,
} from '../../../converters';
import {Board, PiecePosition, PieceType} from '../../../../types';

export const isKingInCheckByDirectionalPiece = (
	chessBoard: Board,
	position: PiecePosition,
	pieceType: PieceType,
	differences: [number, number][]
) => {
	for (const [rowDifference, columnDifference] of differences)
		for (let i = 1; i < 8; i++) {
			const rowNumber = ROW_TO_NUMBER[position.row] + rowDifference * i;
			const columnNumber =
				COLUMN_TO_NUMBER[position.column] + columnDifference * i;

			if (rowNumber < 1 || rowNumber > 8) break;
			if (columnNumber < 1 || columnNumber > 8) break;

			const row = NUMBER_TO_ROW[rowNumber];
			const column = NUMBER_TO_COLUMN[columnNumber];

			const piece = chessBoard[row][column].piece;

			if (piece && piece.color === chessBoard.turn) break;

			if (piece && (piece.type === pieceType || piece.type === PieceType.QUEEN))
				return true;

			if (piece) break;
		}

	return false;
};
