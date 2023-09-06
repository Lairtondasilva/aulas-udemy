import { Text } from "react-native";
import * as Styled from "./styles";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const ImageSelector = () => {
  const [selectedImages, setSelectedImages] = useState<Array<any>>([]);

  const handleImageAdd = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [12, 12],
        quality: 1,
      });

      console.log("ImagePicker result:", result);

      if (!result.canceled) {
        const updatedImages = [...selectedImages, result.assets[0].uri];
        console.log("Updated Images:", updatedImages);
        setSelectedImages(updatedImages);
      }
    } catch (error) {
      console.log("ImagePicker Error:", error);
    }
  };
  const handleImageRemove = (index) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
  };

  return (
    <Styled.Container>
      <Styled.SelectedImagesContainer>
        {selectedImages.map((imageUri, index) => (
          <Styled.SelectedImageWrapper key={index}>
            <Styled.SelectedImage source={{ uri: imageUri }} />
            <Styled.RemoveButton onPress={() => handleImageRemove(index)}>
              <Text>Remove</Text>
            </Styled.RemoveButton>
          </Styled.SelectedImageWrapper>
        ))}
        <Styled.AddImageButton onPress={handleImageAdd}>
          <Text>Add Image</Text>
        </Styled.AddImageButton>
      </Styled.SelectedImagesContainer>
    </Styled.Container>
  );
};

export default ImageSelector;
