import React, { useState, useEffect, useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import SelectSearch, { SelectedOptionValue, SelectSearchOption } from 'react-select-search';
import 'react-select-search/style.css';

import styles from './NavPanel.module.scss';

import { PlaceType } from '../../types/PlaceType';
import { ListItem } from '../ListItem/ListItem';
import filter from '../../styles/icons/filter.svg';
import { Slider } from '../Slider/Slider';
import { getListData } from '../../services/getListData';
import { getSubways } from '../../services/getSubways';
import { CurrentItemIdContext } from '../App';

export type FilterStateType = {
  minPrice: number | null;
  maxPrice: number | null;
  subway: SelectedOptionValue | SelectedOptionValue[] | null;
};

const filterInitState = {
  minPrice: null,
  maxPrice: null,
  subway: null,
};

const offset = 1;

const sliderMin = 100;
const sliderMax = 5000;

const NavPanel = () => {
  const [listData, setListData] = useState<PlaceType[] | null>(null);

  const [filterState, setFilterState] = useState<FilterStateType>(filterInitState);
  const [isApplyFilters, setIsApplyFilters] = useState(false);
  const [subways, setSubways] = useState<SelectSearchOption[] | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isListError, setIsListError] = useState(false);
  const [isSubwaysError, setIsSubwaysError] = useState(false);
  const [isListLoading, seIsListLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(4);
  const [hasMore, setHasMore] = useState(true);

  const { id, setId } = useContext(CurrentItemIdContext);

  const fetchMoreData = () => {
    getListData(currentPage + offset, isApplyFilters ? filterState : undefined).then((res: PlaceType[]) => {
      setListData((prev) => {
        setHasMore((prev?.length || 0) < res.length);
        return res;
      });

      setCurrentPage((prev) => prev + offset);
    });
  };

  useEffect(() => {
    getListData(currentPage)
      .then((res: PlaceType[]) => {
        setListData(res);
      })
      .catch((error) => setIsListError(true))
      .finally(() => seIsListLoading(false));

    getSubways()
      .then((res) => {
        setSubways(res);
      })
      .catch(() => setIsSubwaysError(true));
  }, []);

  const renderFilterStatus = (data: FilterStateType) => {
    let res = '';
    if (!isApplyFilters) {
      return '???????????? ???? ??????????';
    }
    if (data.subway) {
      res = res + `${data.subway}, `;
    }
    if (data.minPrice) {
      res = res + `???? ${data.minPrice}`;
    }
    if (data.maxPrice) {
      res = res + ` ???? ${data.maxPrice}`;
    }
    return res;
  };

  const handlerPriceChange = (min: number, max: number) => {
    setFilterState((prev) => ({ ...prev, minPrice: min, maxPrice: max }));
  };

  const handleSubmit = () => {
    setIsApplyFilters(true);
    setIsOpen(false);
    seIsListLoading(true);
    getListData(currentPage, filterState)
      .then((res: PlaceType[]) => {
        setListData(res);
      })
      .catch(() => setIsListError(true))
      .finally(() => seIsListLoading(false));
  };

  const handleCancel = () => {
    setIsApplyFilters(false);
    setFilterState(filterInitState);
    setIsOpen(false);

    seIsListLoading(true);
    getListData(currentPage, undefined)
      .then((res: PlaceType[]) => {
        setListData(res);
      })
      .catch(() => setIsListError(true))
      .finally(() => seIsListLoading(false));
  };

  const handlerSubwayChange = (value: SelectedOptionValue | SelectedOptionValue[]) => {
    setFilterState((prev) => ({ ...prev, subway: value }));
  };

  const renderList = () => {
    if (isListLoading) {
      return <h4 className={styles.Message}>???????????????? ????????????...</h4>;
    }

    if (isListError) {
      return <div className={styles.Message}>???? ?????????????? ???????????????? ???????????? ???? ????????????</div>;
    }

    if (!listData?.length) {
      return <div className={styles.Message}>???????????? ???? ?????????????? ?? ?????????????????? ??????????????????????</div>;
    }

    return (
      <InfiniteScroll
        dataLength={listData?.length || currentPage}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>???????????????? ????????????...</h4>}
        className={styles.List}
        height={'calc(100vh - 52px)'}
      >
        {listData &&
          listData.map((place) => (
            <ListItem data={place} key={place.placeId} onMouseEnter={setId} onMouseLeave={() => setId(null)} />
          ))}
      </InfiniteScroll>
    );
  };

  return (
    <div className={`${styles.NavPanelWrapper} ${isOpen ? styles.Open : ''}`}>
      <div className={styles.FilterPanel}>
        <div className={styles.FilterBtn} onClick={() => setIsOpen((prev) => !prev)}>
          <img src={filter} />
        </div>
        <div className={styles.FilterStatus}>{renderFilterStatus(filterState)}</div>
      </div>

      <div className={styles.FilterWindow}>
        <div className={styles.FilterParam}>
          <div className={styles.Title}>????????</div>
          <Slider
            min={sliderMin}
            max={sliderMax}
            onChange={handlerPriceChange}
            initMinVal={sliderMin}
            initMaxVal={sliderMax}
          />
          <div className={styles.SliderValues}>
            <div>{`???? ${filterState.minPrice || sliderMin}`}</div>
            <div>{`???? ${filterState.maxPrice || sliderMax}`}</div>
          </div>
        </div>
        <div className={styles.FilterParam}>
          <div className={styles.Title}>??????????</div>

          {!isSubwaysError ? (
            <SelectSearch
              className={`${styles.SelectSearch} select-search`}
              options={subways || []}
              search
              placeholder="???????????????? ??????????"
              value={`${filterState.subway}` || ''}
              onChange={handlerSubwayChange}
              autoComplete={'off'}
            />
          ) : (
            '???? ?????????????? ???????????????? ???????????? ???? ???????????????? ??????????'
          )}
        </div>
        <div className={styles.OptionButtons}>
          <button onClick={handleSubmit}>??????????????????</button>
          <button onClick={handleCancel}>????????????????</button>
        </div>
      </div>
      {renderList()}
    </div>
  );
};

export default NavPanel;
