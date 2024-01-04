import { View, Text, StyleSheet } from "react-native"
import { COLOR } from "../../constants"
import { SliderBox } from "react-native-image-slider-box"



export default function Carousel() {
  const DATA_FAKE = [
    "https://i.ibb.co/s5mZZc8/slider-3.png",
    "https://i.ibb.co/7S3s1JJ/slider-2.png",
    "https://i.ibb.co/n6bjVvy/slider-1.png",
  ]

  return (
    <View style={styles.carouselContainer}>
        <SliderBox
          images={DATA_FAKE}
          sliderBoxHeight={180}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        />
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
