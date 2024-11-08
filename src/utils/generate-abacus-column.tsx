import { useSelector } from 'react-redux'
import AbacusColumn from '../components/AbacusColumn'
import { RootState } from '../store/store'

export function GenerateAbacusColumn() {
	const columnCount = useSelector(
		(state: RootState) => state.optionalDisplay.columnCount
	)
	return Array.from({ length: columnCount }, (_, index) => (
		<AbacusColumn key={index} />
	))
}
