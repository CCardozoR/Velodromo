import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter, Filters } from '../../state/slices/ClassificationTable';
import './Filters.scss';
export interface IFilterProps {
  name: string;
  value: Filters;
}

function Filter(props: IFilterProps) {
  const dispatch = useDispatch();
  const { name, value } = props;
  return (
    <button
      className='filter-button'
      aria-label={name}
      onClick={() => dispatch(changeFilter(value))}
    >
      {name}
    </button>
  );
}

function FiltersBar() {
  return (
    <div className='filter-container'>
      <Filter name='Mejora' value={Filters.IMPROVEMENT}></Filter>
      <Filter name='Menor tiempo' value={Filters.FASTEST_TIME}></Filter>
      {/* <Filter name='Combinada' value={Filters.AGREGATED}></Filter> */}
      <Filter name='Masculino' value={Filters.GENDER_MALE}></Filter>
      <Filter name='Femenino' value={Filters.GENDER_FEMALE}></Filter>
    </div>
  );
}

export default FiltersBar;
