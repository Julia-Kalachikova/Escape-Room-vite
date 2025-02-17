import { GenreFilterArray } from '../../../const';
import { changeGenreName } from '../../../store/modules/cards/action-cards';
import { getCurrentGenre } from '../../../store/modules/cards/selector-cards';
import { useAppDispatch, useAppSelector } from '../../../store/store-hooks';


export default function FilterGenre(): JSX.Element {
  const currentGenre = useAppSelector(getCurrentGenre);
  const dispatch = useAppDispatch();
  const onHandleFilterGenreChange = (id: string) => {
    dispatch(changeGenreName(id));
  };

  return (
    <fieldset className='filter__section'>
      <legend className='visually-hidden'>Тематика</legend>
      <ul className='filter__list'>
        {GenreFilterArray.map((link) => (
          <li key={link.id} className='filter__item'>
            <input
              type='radio'
              name='type'
              id={link.id}
              checked={link.id === currentGenre || (link.id === 'any' && !currentGenre)}
              onChange={() => onHandleFilterGenreChange(link.id)}
            />
            <label
              className='filter__label'
              htmlFor={link.id}
            >
              <svg className='filter__icon' width='26' height='30' aria-hidden='true'>
                <use xlinkHref={link.xlinkHref}></use>
              </svg><span className='filter__label-text'>{link.genreName}</span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
