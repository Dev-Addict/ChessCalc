import {Color, PieceType} from './enum';

export interface Piece {
	id: string;
	type: PieceType;
	color: Color;
	moved: boolean;
}
