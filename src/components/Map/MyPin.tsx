import React, { useState } from 'react';
import { Placemark } from 'react-yandex-maps';

export const MyPin = (props: any) => {
  const { pin, id, setId, template } = props;

  const [hoveredPinId, setHoveredPinId] = useState<number | null>(null);

  const onMouseEnter = (hoveredId: number) => {
    if (hoveredId !== id) {
      setHoveredPinId(hoveredId);
    }
  };
  const onMouseLeave = () => {
    setHoveredPinId(null);
  };

  const onClick = (clickId: number) => {
    setId(clickId);
    setHoveredPinId(null);
  };

  return (
    <Placemark
      props={pin}
      openHintOnHover={false}
      geometry={[pin.latitude, pin.longitude]}
      onMouseEnter={() => onMouseEnter(pin.placeId)}
      onMouseLeave={onMouseLeave}
      onClick={() => {
        onClick(pin.placeId);
      }}
      properties={{
        iconContent:
          `<div class="pin ${pin.placeId === id ? 'chosen' : pin.placeId === hoveredPinId ? 'hover' : ''}"> 
        <div class="wrapper">
           <div class='title'>${pin.name}</div>` +
          `<div class='price'>${pin.price} ₽</div>
           </div>
        
      </div>`,
      }}
      options={{
        iconLayout: 'default#imageWithContent',
        iconContentLayout: template,
        iconImageHref: '',
        iconImageSize: [24, 24],
        iconContentOffset: [-8, -36],
      }}
    />
  );
};
