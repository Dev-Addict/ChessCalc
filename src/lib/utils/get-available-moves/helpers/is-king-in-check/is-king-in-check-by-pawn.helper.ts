import {
	ROW_TO_NUMBER,
	COLUMN_TO_NUMBER,
	NUMBER_TO_ROW,
	NUMBER_TO_COLUMN,
} from '../../../converters';
import {Board, PiecePosition, Color, PieceType} from '../../../../types';

export const isKingInCheckByPawn = (
	chessBoard: Board,
	position: PiecePosition
) => {
	const ratio = chessBoard.turn === Color.WHITE ? 1 : -1;

	const row = ROW_TO_NUMBER[position.row] + ratio;

	if (row < 1 || row > 8) return false;

	for (const columnDifference of [-1, 1]) {
		const column = COLUMN_TO_NUMBER[position.column] + columnDifference;

		if (column < 1 || column > 8) continue;

		const piece =
			chessBoard[NUMBER_TO_ROW[row]][NUMBER_TO_COLUMN[column]].piece;

		if (piece?.type === PieceType.PAWN && piece.color !== chessBoard.turn)
			return true;
	}

	return false;
};
