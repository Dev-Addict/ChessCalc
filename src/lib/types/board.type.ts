import {Color, Column, Row} from './enum';
import {Tile} from './tile.type';

export type Board = {
	[_ in keyof typeof Row]: {
		[_ in keyof typeof Column]: Tile;
	};
} & {
	isGame: boolean;
	turn: Color;
};
