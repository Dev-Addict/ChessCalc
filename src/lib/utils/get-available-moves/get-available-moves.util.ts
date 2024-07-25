import {getAvailablePawnMoves} from './get-available-pawn-moves.util';
import {getAvailableKnightMoves} from './get-available-knight-moves.util';
import {getAvailableBishopMoves} from './get-available-bishop-moves.util';
import {getAvailableRookMoves} from './get-available-rook-moves.util';
import {getAvailableQueenMoves} from './get-available-queen-moves.util';
import {getAvailableKingMoves} from './get-available-king-moves.util';
import {removeInvalidMoves} from './helpers/remove-invalid-moves.helper';
import {Board, PiecePosition, PieceType} from '../../types';

export const getAvailableMoves = (
	chessBoard: Board,
	position: PiecePosition
): PiecePosition[] => {
	const piece = chessBoard[position.row][position.column].piece;

	if (!piece) return [];

	let availableMoves: PiecePosition[];

	switch (piece.type) {
		case PieceType.PAWN:
			availableMoves = getAvailablePawnMoves(chessBoard, position, piece);
			break;
		case PieceType.KNIGHT:
			availableMoves = getAvailableKnightMoves(chessBoard, position, piece);
			break;
		case PieceType.BISHOP:
			availableMoves = getAvailableBishopMoves(chessBoard, position, piece);
			break;
		case PieceType.ROOK:
			availableMoves = getAvailableRookMoves(chessBoard, position, piece);
			break;
		case PieceType.QUEEN:
			availableMoves = getAvailableQueenMoves(chessBoard, position, piece);
			break;
		case PieceType.KING:
			availableMoves = getAvailableKingMoves(chessBoard, position, piece);
			break;
		default:
			availableMoves = [];
	}

	return removeInvalidMoves(chessBoard, availableMoves, position);
};
