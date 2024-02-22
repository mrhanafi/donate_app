import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/fonts/helper";


const style = StyleSheet.create({
    header:{
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(24),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerIntroText: {
        fontFamily: getFontFamily('Inter', '400'),
        fontSize: scaleFontSize(16),
        lineHeight: scaleFontSize(19),
        color: '#636776',
    },
    username: {
        marginTop: verticalScale(5)
    },
    profileImage: {
        width: horizontalScale(50),
        height: verticalScale(50)
    },
    searchBox: {
        marginHorizontal: horizontalScale(24),
        marginTop: verticalScale(20)
    },
    highlightedImageContainer: {
        marginHorizontal: horizontalScale(24),
    },
    highlightedImage: {
        width: '100%',
        height: verticalScale(160)
    }
});

export default style;