import * as BlinkIDReactNative from 'blinkid-react-native';
const blinkIDCombinedRecognizer = new BlinkIDReactNative.BlinkIdCombinedRecognizer();
blinkIDCombinedRecognizer.returnFullDocumentImage = true;
blinkIDCombinedRecognizer.anonymizeImage = false;
blinkIDCombinedRecognizer.fullDocumentImageDpi = 300;
export default blinkIDCombinedRecognizer;
