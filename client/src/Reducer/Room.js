import * as Action from '../Action/type';

const initialState = {
  typeFetch: null,
  RoomData: [],
  InitialRoomData: [],
  Error: null,
  idRoom: null,
  dataDetailRoom: {},
  photoRoom: [],
  skipRoom: 0,
};
const RoomHotel = (state = initialState, action) => {
  switch (action.type) {
    case Action.FETCH__ROOM__HOTEL:
      return {
        ...state,
        typeFetch: action.payload,
      };
    case Action.FETCH__ROOM__HOTEL__SUCCESS:
      return {
        ...state,
        RoomData: action.payload.FetchRoomHotel,
        InitialRoomData: action.payload.FetchRoomHotel,
      };
    case Action.FETCH__ROOM__HOTEL__FAIL:
      return {
        ...state,
        Error: action.payload,
      };
    case Action.FETCH__DETAIL__ROOM:
      return {
        ...state,
        idRoom: action.payload,
      };
    case Action.FETCH__DETAIL__ROOM__SUCCESS:
      return {
        ...state,
        dataDetailRoom: action.payload.FetchDetailRoom,
        photoRoom: action.payload.FetchDetailRoom.images,
      };
    case Action.FETCH__ANOTHER__ROOM:
      return {
        ...state,
        skipRoom: action.payload,
      };
    case Action.FETCH__ANOTHER__ROOM__SUCCESS:
      return {
        ...state,
        RoomData: action.payload.FetchAnotherRoom,
        InitialRoomData: action.payload.FetchAnotherRoom,
      };
    case Action.FILTER_BY_AREA:
      let filterText = action.payload === 'all' ? ' ' : action.payload;
      return {
        ...state,
        RoomData: FilterByArea(filterText, state.InitialRoomData),
      };
    case Action.FILTER_BY_PRICE:
      return {
        ...state,
        RoomData: FilterByPrice(action.payload, state.InitialRoomData),
      };
    default:
      return state;
  }
};
export default RoomHotel;

const FilterByArea = (text, array) => {
  let dataFilter = [];
  array.map((item) => {
    if (item.address.includes(text)) {
      dataFilter.push(item);
      return item;
    }
    return item;
  });
  return dataFilter;
};

const FilterByPrice = (text, array) => {
  let roomFilter = [];
  array.map((item) => {
    if (text == 600) {
      if (item.price <= 600) {
        roomFilter.push(item);
      }
    } else if (text == 900) {
      if (item.price <= 900 && item.price > 600) {
        roomFilter.push(item);
      }
    } else if (text == 1000) {
      if (item.price > 900) {
        roomFilter.push(item);
      }
    } else {
      roomFilter.push(item);
    }
  });
  return roomFilter;
};
