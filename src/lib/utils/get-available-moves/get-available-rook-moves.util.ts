import {getAvailableDirectionalMoves} from './helpers/get-available-directional-moves.helper';
import {Board, PiecePosition, Piece} from '../../types';

export const getAvailableRookMoves = (
	chessBoard: Board,
	position: PiecePosition,
	piece: Piece
): PiecePosition[] =>
	getAvailableDirectionalMoves(chessBoard, position, piece, [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	]);
