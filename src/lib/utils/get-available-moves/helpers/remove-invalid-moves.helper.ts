import {isKingInCheck} from './is-king-in-check/is-king-in-check.helper';
import {Board, PiecePosition, PieceType} from '../../../types';
import {ROWS, COLUMNS} from '../../../constants';

export const removeInvalidMoves = (
	chessBoard: Board,
	availableMoves: PiecePosition[],
	position: PiecePosition
): PiecePosition[] => {
	const result: PiecePosition[] = [];

	let kingPosition: PiecePosition | null = null;

	if (chessBoard[position.row][position.column].piece?.type !== PieceType.KING)
		for (const row of ROWS)
			for (const column of COLUMNS) {
				const piece = chessBoard[row][column].piece;

				if (piece?.type === PieceType.KING && piece.color === chessBoard.turn)
					kingPosition = {row, column};
			}

	for (const availableMove of availableMoves) {
		const newBoard = structuredClone(chessBoard);

		newBoard[position.row][position.column].piece = null;
		newBoard[availableMove.row][availableMove.column].piece =
			chessBoard[position.row][position.column].piece;

		if (!isKingInCheck(newBoard, kingPosition || availableMove))
			result.push(availableMove);
	}

	return result;
};
