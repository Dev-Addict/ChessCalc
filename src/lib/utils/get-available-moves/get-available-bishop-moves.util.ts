import {getAvailableDirectionalMoves} from './helpers/get-available-directional-moves.helper';
import {Board, PiecePosition, Piece} from '../../types';

export const getAvailableBishopMoves = (
	chessBoard: Board,
	position: PiecePosition,
	piece: Piece
): PiecePosition[] =>
	getAvailableDirectionalMoves(chessBoard, position, piece, [
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1],
	]);
