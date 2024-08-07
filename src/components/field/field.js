import css from './field.module.scss';
import { getCellClassName } from '../../utils';
import { cellClickHandler } from '../../handlers/cell-click-handler';
import { useDispatch, useSelector } from 'react-redux';
import { cellsSelector, currentPlayerSelector, gameStatusSelector, winPatternSelector } from '../../selectors';

export function Field() {
	const cells = useSelector(cellsSelector);
	const winPattern = useSelector(winPatternSelector);
	const gameStatus = useSelector(gameStatusSelector);
	const currentPlayer = useSelector(currentPlayerSelector);

	const dispatch = useDispatch();

	return (
		<div className={css['field']}>
			{cells.map((player, cellId) => (
				<button
					className={getCellClassName(player, cellId, winPattern)}
					onClick={() => cellClickHandler(cellId, cells, gameStatus, currentPlayer, dispatch)}
					key={cellId}
				></button>
			))}
		</div>
	);
}
