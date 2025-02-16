import { LevelFilterArray } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../store/store-hooks';
import { getCurrentLevel } from '../../../store/modules/cards/selector-cards';
import { changeLevelName } from '../../../store/modules/cards/action-cards';


export default function FilterLevelApp(): JSX.Element {
  const currentLevel = useAppSelector(getCurrentLevel);
  const dispatch = useAppDispatch();
  const onHandleFilterGenreChange = (id: string) => {
    dispatch(changeLevelName(id));
  };

  return (
    <fieldset className='filter__section'>
      <legend className='visually-hidden'>Сложность</legend>
      <ul className='filter__list'>
        {LevelFilterArray.map((link) => (
          <li key={link.levelId} className='filter__item'>
            <input
              type='radio'
              name='level'
              id={link.levelId}
              checked={link.levelId === currentLevel}
              onChange={() => onHandleFilterGenreChange(link.levelId)}
            />
            <label className='filter__label' htmlFor={link.levelId}>
              <span className='filter__label-text'>{link.levelName}</span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
