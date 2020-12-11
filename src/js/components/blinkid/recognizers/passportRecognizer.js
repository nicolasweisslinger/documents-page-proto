import * as BlinkIDReactNative from "blinkid-react-native";
const passportRecognizer = new BlinkIDReactNative.PassportRecognizer();
passportRecognizer.returnFullDocumentImage = true;
export default passportRecognizer;
