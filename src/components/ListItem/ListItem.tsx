import React from 'react';
import { PlaceType } from '../../types/PlaceType';
import { SubwayType } from '../../types/SubwayType';
import styles from './ListItem.module.scss';
import home from '../../styles/icons/home.svg';
import calendar from '../../styles/icons/calendar.svg';

export const ListItem = ({
  data,
  onMouseEnter,
  onMouseLeave,
}: {
  data: PlaceType;
  onMouseEnter?: (id: number) => void;
  onMouseLeave?: () => void;
}) => {
  const { placeId, description, price, name, location, schedule, createDate, updateDate, сontact } = data;

  const renderSubway = (subway: SubwayType) => (
    <>
      <div className={styles.LineDot} style={{ background: subway.line.color }}></div>
      <div className={styles.Name}>{subway.station.name}</div>
      <div className={styles.Distance}>{`${subway.distance} м`}</div>
    </>
  );

  return (
    <div className={styles.Card} onMouseEnter={() => onMouseEnter?.(placeId)} onMouseLeave={onMouseLeave}>
      <div className={styles.Header}>
        <div className={styles.Title}>{name}</div>
        <div className={styles.Price}>
          <span className={styles.Count}>{`${price} ₽`}</span>
          <span>/час</span>
        </div>
      </div>
      <p className={styles.Description}>{description}</p>
      <div className={styles.Block}>
        <div className={styles.Icon}>
          <img src={home} />
        </div>
        <div className={styles.Subway}>{renderSubway(location.subway[0])}</div>
        <div className={styles.Adress}>{location.fullAddress}</div>
      </div>
      <div className={styles.Block}>
        <div className={styles.Icon}>
          <img src={calendar} />
        </div>
        {schedule}
      </div>
      <div className={styles.Contact}>
        <div className={styles.User}>
          <div className={styles.Avatar}>{сontact.name[0]}</div>
          <div className={styles.Name}>{сontact.name}</div>
        </div>
        <div className={styles.Phone}>{сontact.phone}</div>
        <div className={styles.Email}>{сontact.email}</div>
      </div>
      <div className={styles.Footer}>
        <div className={styles.UpdateTime}>{updateDate.toDateString()}</div>
        <div className={styles.CreateTime}>{createDate.toDateString()}</div>
      </div>
    </div>
  );
};
