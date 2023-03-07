//@ts-nocheck
import React from 'react';
import { Map, Placemark } from 'react-yandex-maps';
import { getPins } from '../../services/getPins';
import { PlaceType } from '../../types/PlaceType';
import { CurrentItemIdContext } from '../App';
import { Spinner } from '../Loader/Spinner';
import { MyPin } from './MyPin';
import './styles.scss';

export class MyMap extends React.Component<{ data: PlaceType[] }> {
  constructor(props) {
    super(props);
    this.state = {
      template: null,
      pinList: null,
      error: null,
      hoveredPinId: null,
    };

    this.createTemplateLayoutFactory = (ymaps) => {
      if (ymaps && !this.state.template) {
        this.setState({
          template: ymaps.templateLayoutFactory.createClass(`$[properties.iconContent]`),
        });
      }
    };
  }

  componentDidMount() {
    getPins().then((data) => {
      this.setState({ pinList: data });
    });
  }

  render() {
    return (
      <CurrentItemIdContext.Consumer>
        {({ id, setId }) => {
          if (!this.state.pinList) {
            return (
              <div className="SpinnerWrapper">
                <Spinner />
              </div>
            );
          }

          return (
            <Map
              onLoad={this.createTemplateLayoutFactory}
              width={'100%'}
              height={'100vh'}
              defaultState={{ center: [55.75, 37.57], zoom: 12 }}
              width={'75%'}
              height={'calc(100vh - 52px)'}
              modules={['templateLayoutFactory', 'layout.ImageWithContent']}
            >
              {this.state.pinList.map((pin) => (
                <MyPin pin={pin} id={id} template={this.state.template} key={pin.placeId} setId={setId} />
              ))}
            </Map>
          );
        }}
      </CurrentItemIdContext.Consumer>
    );
  }
}
