import { Dimensions, Image, ScrollView } from "react-native";

const { width } = Dimensions.get("window");

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  return (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
      {images.map((img, index) => (
        <Image
          key={index}
          source={{ uri: img }}
          style={{ width, height: 260 }}
        />
      ))}
    </ScrollView>
  );
}
