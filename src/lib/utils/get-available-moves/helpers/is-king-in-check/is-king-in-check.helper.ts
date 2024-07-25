import {isKingInCheckByDirectionalPiece} from './is-king-in-check-by-directional-piece.helper';
import {isKingInCheckByKnight} from './is-king-in-check-by-knight.helper';
import {isKingInCheckByPawn} from './is-king-in-check-by-pawn.helper';
import {
	ROW_TO_NUMBER,
	COLUMN_TO_NUMBER,
	NUMBER_TO_COLUMN,
	NUMBER_TO_ROW,
} from '../../../converters';
import {PieceType, Board, PiecePosition} from '../../../../types';

export const isKingInCheck = (chessBoard: Board, position: PiecePosition) => {
	let isKingInCheckInDiagonalDirection = isKingInCheckByDirectionalPiece(
		chessBoard,
		position,
		PieceType.BISHOP,
		[
			[1, 1],
			[-1, 1],
			[1, -1],
			[-1, -1],
		]
	);

	if (isKingInCheckInDiagonalDirection) return true;

	let isKingInCheckInHorizontalDirection = isKingInCheckByDirectionalPiece(
		chessBoard,
		position,
		PieceType.ROOK,
		[
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
		]
	);

	if (isKingInCheckInHorizontalDirection) return true;

	if (isKingInCheckByKnight(chessBoard, position)) return true;

	if (isKingInCheckByPawn(chessBoard, position)) return true;

	for (const rowDifference of [-1, 0, 1])
		for (const columnDifference of [-1, 0, 1]) {
			if (rowDifference === 0 && columnDifference === 0) continue;

			const rowNumber = ROW_TO_NUMBER[position.row] + rowDifference;
			const columnNumber = COLUMN_TO_NUMBER[position.column] + columnDifference;

			if (rowNumber < 1 || rowNumber > 8) continue;
			if (columnNumber < 1 || columnNumber > 8) continue;

			const row = NUMBER_TO_ROW[rowNumber];
			const column = NUMBER_TO_COLUMN[columnNumber];

			const piece = chessBoard[row][column].piece;

			if (piece && piece.type === PieceType.KING) return true;
		}

	return false;
};
