import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {Filters} from "../../types";
import {filter} from "../../redux/actions/filter";

const Filter: FC = () => {
    const [activeFilter, setActiveFilter] = useState<Filters>(Filters.ALL)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(filter(activeFilter))
    }, [activeFilter])

    const onSelectValue = (e: ChangeEvent<HTMLSelectElement>): void => {
        const val = e.target.value

        setActiveFilter(val as Filters)
    }

    return (
            <div className="d-flex align-items-center justify-content-end" defaultValue={'all'}>
                <label className="text-secondary mx-3">Filter</label>
                <select
                    className="custom-select btn border-secondary border-2"
                    value={activeFilter}
                    onChange={onSelectValue}
                >
                    <option value={Filters.ALL}>All</option>
                    <option value={Filters.COMPLETED}>Completed</option>
                    <option value={Filters.ACTIVE}>Active</option>
                </select>
            </div>
    );
};

export default Filter;