import { useState } from 'react'
import { useSelector } from 'react-redux'
import { bottomStones } from '../constants/abacus-column.constants'
import { RootState } from '../store/store'
import { TBottomStones, TThemeSwitcher } from '../types/abacus-types'

const AbacusColumn = () => {
	const [activeTopStone, setActiveTopStone] = useState<string | boolean>(false)
	const [activeStone, setActiveStone] = useState<TBottomStones | null>(null)

	const theme = useSelector((state: RootState) => state.optionalDisplay.theme)
	const stoneCount = useSelector(
		(state: RootState) => state.optionalDisplay.stoneCount
	)

	function handleClick(order: TBottomStones) {
		setActiveStone(activeStone === order ? null : order)
	}

	function handleClickTopStone() {
		setActiveTopStone(activeTopStone ? false : true)
	}

	function themeSwitcher(type: TThemeSwitcher) {
		switch (theme) {
			case 'white':
				if (type === 'column') return '/assets/abacus/WhiteFrame.png'
				else return '/assets/abacus/BlueStone.png'

			case 'brown':
				if (type === 'column') return '/assets/abacus/BrownFrame.png'
				else return '/assets/abacus/BronzeStone.png'
		}
	}

	return (
		<div className='abacus__column'>
			<img src={themeSwitcher('column')} alt='abacus-column' />
			<img
				className='abacus__column__stone-top'
				src={themeSwitcher('stone')}
				alt='top-stone'
				style={{ top: activeTopStone ? '4%' : '' }}
				onClick={() => handleClickTopStone()}
			/>
			{bottomStones.slice(0, stoneCount).map(e => (
				<img
					key={e.id}
					style={{
						bottom:
							activeStone === e.order
								? `${e.activePosition.toString()}px`
								: `${e.defaultPosition.toString()}px`,
					}}
					className='abacus__column__stone-bottom'
					src={themeSwitcher('stone')}
					alt='bottom-stone'
					onClick={() => handleClick(e.order)}
				/>
			))}
		</div>
	)
}

export default AbacusColumn
