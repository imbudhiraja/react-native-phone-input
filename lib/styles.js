import { StyleSheet, Dimensions, Platform } from 'react-native';

const {
  width, height,
} = Dimensions.get('window');

const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D9DADD',
    borderRadius: 3,
    borderWidth: 1,
    marginTop: (SCREEN_HEIGHT / 100) * 2,
    marginHorizontal: (SCREEN_HEIGHT / 100) * 2,
    width: (SCREEN_WIDTH / 100) * 80,
  },
  buttonTextStyle: {
    fontSize: 14,
    color: 'black',
  },
  basicContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',

    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.10000000149011612)',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  modalContainer: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  buttonView: {
    width: SCREEN_WIDTH,
    padding: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bottomPicker: { width: SCREEN_WIDTH },
  flag: {
    borderRadius: 2,
    backgroundColor: 'white',
    alignSelf: 'center',
    height: (SCREEN_WIDTH / 100) * 5,
    marginLeft: (SCREEN_WIDTH / 100) * 3,
    width: (SCREEN_WIDTH / 100) * 7,
  },
  text: {
    padding: 0,
    justifyContent: 'center',
    color: 'black',
    flex: 1,
    marginHorizontal: 10,
    fontSize: 14,
    ...Platform.select({
      android: { height: (SCREEN_HEIGHT / 100) * 7.8 },
      ios: { height: (SCREEN_HEIGHT / 100) * 5 },
    }),
  },
  itemStyle: {
    fontSize: 14,
    color: 'black',
  },
});
