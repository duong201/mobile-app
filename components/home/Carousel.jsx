import { View, Text, StyleSheet } from "react-native"
import { COLOR } from "../../constants"
// import { SliderBox } from "react-native-image-slider-box"
// import { COLOR } from "../../constant"

const DATA_FAKE = [
  "https://i.ibb.co/s5mZZc8/slider-3.png",
  "https://i.ibb.co/7S3s1JJ/slider-2.png",
  "https://i.ibb.co/n6bjVvy/slider-1.png",
]

export default function Carousel() {
  return (
    <View style={styles.carouselContainer}>
      {/* <SliderBox
        image={DATA_FAKE}
        dotColor={COLOR.primary}
        ImageCocomponentStyle={{
          borderRadius: 15,
          width: "95%",
          marginTop: 15,
        }}></SliderBox> */}
    </View>
  )
}

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLOR.primary,
  },
})
