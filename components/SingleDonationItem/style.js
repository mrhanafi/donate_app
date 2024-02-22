import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";


const style = StyleSheet.create({
    image: {
        width: horizontalScale(155),
        height: verticalScale(170)
    },
    badge: {
        position: 'absolute', //sama level dgn gambar
        zIndex:1,   //on top gambar
        top: verticalScale(10),
    },
    donationInformation: {
        marginTop: verticalScale(16),

    },
    price: {
        marginTop: verticalScale(5)
    }
});

export default style;