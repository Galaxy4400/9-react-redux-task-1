import css from './game.module.scss';
import { Field } from '../field/field';
import { Information } from '../information/information';
import { GAME_STATUS } from '../../constants';
import { reset } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { gameStatusSelector } from '../../selectors';

export function Game() {
	const gameStatus = useSelector(gameStatusSelector);

	const dispatch = useDispatch();

	return (
		<div className={css['game']}>
			<Information />
			<Field />
			{gameStatus !== GAME_STATUS.TURN && <button onClick={() => dispatch(reset())}>Начать заново</button>}
		</div>
	);
}
