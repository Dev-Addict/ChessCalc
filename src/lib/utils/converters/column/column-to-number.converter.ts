import {Column} from '../../../types';

export const COLUMN_TO_NUMBER: {
	[_ in Column]: number;
} = {
	[Column.A]: 1,
	[Column.B]: 2,
	[Column.C]: 3,
	[Column.D]: 4,
	[Column.E]: 5,
	[Column.F]: 6,
	[Column.G]: 7,
	[Column.H]: 8,
};
