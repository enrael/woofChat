# woofChat

possible issues fix:

1. Unable to load script from assets 'index.android.bundle'

create assets folder inside android/app/src/main if not exist

react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

react-native run-android
