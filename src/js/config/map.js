import ossMarker from '../../images/mapMarkers/INTShop.png';
import { COMPANY_LOCATION } from '../constants';
import { pathNeptun, pathMarket } from './path';
// import oss from '../../images/mapMarkers/oss_vert.svg';
import cinemaRU from '../../images/mapMarkers/kinoteatr rus.svg';
import marketRU from '../../images/mapMarkers/rinok rus.svg';
import cinemaUA from '../../images/mapMarkers/kinoteatr ukr.svg';
import marketUA from '../../images/mapMarkers/rinok ukr.svg';

export const markers = [
  // company
  {
    name: 'oss',
    position: { lat: 46.311241, lng: 30.654821 },
    opacity: 1,
    icon: {
      ua: {
        url: '',
        scaledSize: { width: 75, height: 35 },
      },
      ru: {
        url: '',
        scaledSize: { width: 75, height: 35 },
      },
    },
    draggable: false,
    title: 'INTShop',
    label: '',
  },
  // company label
  {
    name: 'INTShop',
    position: COMPANY_LOCATION,
    opacity: 1,
    icon: {
      ua: {
        url: ossMarker,
        scaledSize: { width: 87, height: 77 },
      },
      ru: {
        url: ossMarker,
        scaledSize: { width: 87, height: 75 },
      },
    },
    draggable: false,
    title: '',
    label: '',
  },
  // neptune
  {
    name: 'neptune',
    position: { lat: 46.304816, lng: 30.654269 },
    opacity: 1,
    icon: {
      ua: {
        url: cinemaUA,
        scaledSize: { width: 135, height: 35 },
      },
      ru: {
        url: cinemaRU,
        scaledSize: { width: 135, height: 35 },
      },
    },
    draggable: false,
    title: '',
    label: '',
  },
  // {
  //   name: 'busstop',
  //   position: { lat: 46.306560000000005, lng: 30.650940000000002 },
  //   opacity: 0.6,
  //   icon: {
  //     url: mark,
  //     scaledSize: { width: 20, height: 20 },
  //   },
  //   draggable: true,
  //   title: '',
  //   label: { text: 'Автобусная остановка', color: 'rgb(70, 70, 70)' },
  // },
  // Market
  {
    name: 'market',
    opacity: 1,
    position: { lat: 46.308685, lng: 30.650870 },
    icon: {
      ua: {
        url: marketUA,
        scaledSize: { width: 125, height: 35 },
      },
      ru: {
        url: marketRU,
        scaledSize: { width: 125, height: 35 },
      },
    },
    draggable: false,
    title: '',
    label: '',
  },
];
// polyline symbols
const lineSymbol = {
  path: 0,
  strokeOpacity: 1,
  scale: 4,
};
// polylines options
export const polylines = [
  {
    name: 'market',
    path: pathMarket,
    options: {
      strokeColor: '#0eb7f6',
      strokeOpacity: 0,
      fillOpacity: 0,
      icons: [{
        icon: lineSymbol,
        offset: '0',
        repeat: '20px',
      }],
    },
  },
  {
    name: 'neptun',
    path: pathNeptun,
    options: {
      strokeColor: '#0eb7f6',
      strokeOpacity: 0,
      fillOpacity: 0,
      icons: [{
        icon: lineSymbol,
        offset: '0',
        repeat: '20px',
      }],
    },
  },
];

