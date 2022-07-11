import React, { useState } from "react";
import { IImage } from "../../../../types/product.types";
import useImageUpload from "../../../../hooks/useImageUpload";
import useCreateCollection from "../../../../hooks/useCreateCollection";

import Input from "../../../../components/Input";
import Spinner from "../../../../components/Spinner";
import * as C from "./styles";

export default function Collection() {
  const [imageStatus, imageError, uploadImages] = useImageUpload();
  const [collStatus, collError, createCollection] = useCreateCollection();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [season, setSeason] = useState("");
  const [author, setAuthor] = useState("");
  const [images, setImages] = useState<IImage[]>([]);

  const handleUploadImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const images = await uploadImages(files);
    if (!images) return;
    setImages(images);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (images.length < 3) return;
    createCollection({
      name,
      description,
      season,
      author,
      lookbook: images,
    });
  };

  return (
    <>
      {collStatus === "success" ? (
        <C.Wrapper>
          <C.Span>Collection criada com sucesso!</C.Span>
        </C.Wrapper>
      ) : (
        <>
          {collStatus === "failure" && <C.Error>{collError}</C.Error>}

          <C.Form onSubmit={handleSubmit}>
            <Input
              inputType="text"
              label="Collection Name"
              state={name}
              setState={setName}
              validState={true}
            />

            <Input
              inputType="text"
              label="Description"
              state={description}
              setState={setDescription}
              validState={true}
            />

            <Input
              inputType="text"
              label="Season"
              state={season}
              setState={setSeason}
              validState={true}
            />

            <Input
              inputType="text"
              label="Author Name"
              state={author}
              setState={setAuthor}
              validState={true}
            />

            {imageStatus === "idle" || imageStatus === "failure" ? (
              <C.ImageInput
                type="file"
                accept="image/*"
                id="image-uploader"
                multiple
                onChange={(e) => handleUploadImages(e)}
              />
            ) : imageStatus === "loading" ? (
              <Spinner />
            ) : (
              ""
            )}

            {images.length > 0 && (
              <C.ImageWrapper>
                <C.Label>Imagens:</C.Label>
                <C.ImagesContainer>
                  {images.map((image, i) => (
                    <C.Image key={i} image={image.url} />
                  ))}
                </C.ImagesContainer>
              </C.ImageWrapper>
            )}

            <C.Button
              disabled={
                !name ||
                !description ||
                !author ||
                !season ||
                images.length < 3 ||
                collStatus === "loading"
                  ? true
                  : false
              }
            >
              {collStatus === "loading" ? <Spinner /> : "Criar Coleção"}
            </C.Button>
          </C.Form>
        </>
      )}
    </>
  );
}
