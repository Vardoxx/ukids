import { useDispatch } from 'react-redux'
import {
	columnCountOptions,
	stoneCountOptions,
	themeOptions,
} from './constants/optional-display.constants'
import {
	columnCount,
	stoneCount,
	theme,
} from './store/slices/optional-display.slice'
import './styles/App.scss'
import { GenerateAbacusColumn } from './utils/generate-abacus-column'

function App() {
	const dispatch = useDispatch()
	return (
		<div className='wrapper'>
			<div className='optional-display'>
				<div className='optional-display__select-container'>
					Theme:
					<select
						className='optional-display__select-container__select'
						onChange={e => dispatch(theme(e.target.value))}
					>
						{themeOptions.map(e => (
							<option key={e}>{e}</option>
						))}
					</select>
				</div>

				<div className='optional-display__select-container'>
					Column count:
					<select
						className='optional-display__select-container__select'
						onChange={e => dispatch(columnCount(e.target.value))}
					>
						{columnCountOptions.map(e => (
							<option key={e}>{e}</option>
						))}
					</select>
				</div>

				<div className='optional-display__select-container'>
					Stone count:
					<select
						className='optional-display__select-container__select'
						onChange={e => dispatch(stoneCount(e.target.value))}
					>
						{stoneCountOptions.map(e => (
							<option key={e}>{e}</option>
						))}
					</select>
				</div>
			</div>
			<div className='abacus'>
				<GenerateAbacusColumn />
			</div>
		</div>
	)
}

export default App
