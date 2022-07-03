import { useState, useEffect } from "react";
import { IOption, IImage } from "../../../../types/product.types";
import useImageUpload from "../../../../hooks/useImageUpload";
import CustomInput from "../../../../components/CustomInput";
import Spinner from "../../../../components/Spinner";
import Input from "../../../../components/Input";
import Color from "../../../../components/Color";
import * as C from "./styles";

interface IProps {
  option: IOption;
  handleUpdateOption: (
    key: number,
    field: string,
    newState:
      | string
      | string[]
      | IImage[]
      | React.ChangeEvent<HTMLInputElement>
      | boolean
  ) => void;
}

export default function Option({ option, handleUpdateOption }: IProps) {
  const [status, error, uploadImages] = useImageUpload();
  const [size, setSize] = useState("");
  const [sizes, setSizes] = useState<string[]>([]);
  const [uploadedImages, setUploadedImages] = useState<IImage[]>([]);

  useEffect(() => {
    handleUpdateOption(option.key, "sizes", sizes);
  }, [sizes]);

  useEffect(() => {
    if (
      uploadedImages.length > 0 &&
      sizes.length > 0 &&
      option.color &&
      option.name
    ) {
      handleUpdateOption(option.key, "isWritten", true);
    }
  }, [sizes, uploadedImages, option.color, option.name]);

  const handleAddSize = () => {
    setSizes([...sizes, size.toUpperCase()]);
    setSize("");
  };

  const handleRemoveSize = (removeSize: string) => {
    setSizes(sizes.filter((size) => size !== removeSize));
  };

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const images = await uploadImages(files);
    if (!images) return;
    handleUpdateOption(option.key, "images", images);
    setUploadedImages(images);
  };

  return (
    <>
      {status === "failure" && <C.Error>{error}</C.Error>}

      <C.Wrapper>
        <CustomInput
          label="Color Name"
          handleUpdateOption={handleUpdateOption}
          field="name"
          optionKey={option.key}
        />

        <Color
          label="Select Color"
          field="color"
          optionKey={option.key}
          handleUpdateOption={handleUpdateOption}
        />
      </C.Wrapper>

      <C.Wrapper>
        <Input
          label="Tamanhos"
          inputType="text"
          state={size}
          setState={setSize}
          validState={true}
        />
        <C.Button onClick={handleAddSize}>Add</C.Button>
      </C.Wrapper>

      {sizes.map((size, i) => (
        <C.Sizes key={i}>
          <C.Size>{size}</C.Size>
          <C.Remove onClick={() => handleRemoveSize(size)}>Remove</C.Remove>
        </C.Sizes>
      ))}

      {status === "idle" || status === "failure" ? (
        <input
          type="file"
          accept="image/*"
          id="image-uploader"
          multiple
          onChange={(e) => handleUploadImage(e)}
        />
      ) : status === "loading" ? (
        <Spinner />
      ) : (
        ""
      )}

      {uploadedImages.length > 0 && (
        <C.ImageWrapper>
          <C.Label>Imagens:</C.Label>
          <C.ImagesContainer>
            {uploadedImages.map((image, i) => (
              <C.Image key={i} image={image.url} />
            ))}
          </C.ImagesContainer>
        </C.ImageWrapper>
      )}
    </>
  );
}
