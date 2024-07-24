import {ROWS} from './rows.constant';
import {COLUMNS} from './columns.constant';
import {COLORS} from './colors.constant';
import {FIRST_ROW_PIECE_TYPES} from './first-row-piece-types.constant';
import {Board, Color, PieceType, Row} from '../types';

export const INITIAL_BOARD = ((): Board => {
	const initialBoard: {[key: string]: any} = {
		isGame: true,
		turn: Color.WHITE,
	};

	for (const row of ROWS) {
		initialBoard[row] = {};

		for (const column of COLUMNS) initialBoard[row][column] = {piece: null};
	}

	for (const column of COLUMNS) {
		initialBoard[Row.TWO][column].piece = {
			id: `WP${column}`,
			type: PieceType.PAWN,
			color: Color.WHITE,
			moved: false,
		};
		initialBoard[Row.SEVEN][column].piece = {
			id: `BP${column}`,
			type: PieceType.PAWN,
			color: Color.BLACK,
			moved: false,
		};
	}

	for (const color of COLORS) {
		const row = color === Color.WHITE ? Row.ONE : Row.EIGHT;

		for (const i in COLUMNS)
			initialBoard[row][COLUMNS[i]].piece = {
				id: `${color[0]}${COLUMNS[i][0]}${i}`,
				type: FIRST_ROW_PIECE_TYPES[i],
				color,
				moved: false,
			};
	}

	return initialBoard as Board;
})();
