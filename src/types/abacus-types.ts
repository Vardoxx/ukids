export type TThemeSwitcher = 'column' | 'stone'

export type TBottomStones = 'first' | 'second' | 'third' | 'four' | 'five'

export interface IBottomStones {
	id: number
	order: TBottomStones
	defaultPosition: number
	activePosition: number
}
