module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'space-in-brackets': [
      'error',
      'never',
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
        arraysInObjects: false,
        objectsInObjects: false,
        propertyName: false,
      },
    ],
  },
};
