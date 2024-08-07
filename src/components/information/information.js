import css from './information.module.scss';
import { getInfoTitle } from '../../utils';
import { useSelector } from 'react-redux';
import { currentPlayerSelector, gameStatusSelector } from '../../selectors';

export function Information() {
	const gameStatus = useSelector(gameStatusSelector);
	const currentPlayer = useSelector(currentPlayerSelector);

	return <div className={css['info']}>{getInfoTitle(gameStatus, currentPlayer)}</div>;
}
