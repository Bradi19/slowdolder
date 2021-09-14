import {
  FETCHING_PHOTOS_DATA,
  FETCHED_PHOTOS_DATA,
  FETCHING_PHOTOS_ERROR,
} from '../actions/companyEventsActions';

const initialState = {
  fetching: false,
  data: [
    {
      thumbnail: 'uploads/events/0bb93c4f782f6ff1f71f8af122c2bc29.jpg',
      title: 'Thousand Foot Krutch - Welcome To The Masquerade',
      publishedAt: '2015-05-10T23:04:59.000Z',
    },
    {
      thumbnail: 'uploads/events/0bb93c4f782f6ff1f71f8af122c2bc29.jpg',
      title: 'Thousand Foot Krutch - Welcome To The Masquerade',
      publishedAt: '2015-05-10T23:04:59.000Z',
    },
    {
      thumbnail: 'uploads/events/0bb93c4f782f6ff1f71f8af122c2bc29.jpg',
      title: 'Thousand Foot Krutch - Welcome To The Masquerade',
      publishedAt: '2015-05-10T23:04:59.000Z',
    },
    {
      thumbnail: 'uploads/events/0bb93c4f782f6ff1f71f8af122c2bc29.jpg',
      title: 'Thousand Foot Krutch - Welcome To The Masquerade',
      publishedAt: '2015-05-10T23:04:59.000Z',
    },
    {
      thumbnail: 'uploads/events/0bb93c4f782f6ff1f71f8af122c2bc29.jpg',
      title: 'Thousand Foot Krutch - Welcome To The Masquerade',
      publishedAt: '2015-05-10T23:04:59.000Z',
    },
  ],
  error: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCHING_PHOTOS_DATA: {
      return {
        fetching: true, data: [], error: '',
      };
    }
    case FETCHING_PHOTOS_ERROR: {
      return {
        fetching: false, data: [], error: action.error,
      };
    }
    case FETCHED_PHOTOS_DATA: {
      return {
        fetching: false, data: [...payload], error: '',
      };
    }
    default: return state;
  }
};
