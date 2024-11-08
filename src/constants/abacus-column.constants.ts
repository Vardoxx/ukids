import { IBottomStones } from '../types/abacus-types'
import { idGenerator } from '../utils/id-generator.util'

export const bottomStones: IBottomStones[] = [
	{
		id: idGenerator(),
		order: 'first',
		defaultPosition: 12,
		activePosition: 12 + 30,
	},
	{
		id: idGenerator(),
		order: 'second',
		defaultPosition: 40,
		activePosition: 40 + 30,
	},
	{
		id: idGenerator(),
		order: 'third',
		defaultPosition: 69,
		activePosition: 69 + 30,
	},
	{
		id: idGenerator(),
		order: 'four',
		defaultPosition: 98,
		activePosition: 98 + 30,
	},
	{
		id: idGenerator(),
		order: 'five',
		defaultPosition: 127,
		activePosition: 127 + 30,
	},
]
