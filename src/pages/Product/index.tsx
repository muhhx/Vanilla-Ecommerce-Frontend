import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCreateFavorite from "../../hooks/useCreateFavorite";
import useFetchProduct from "../../hooks/useFetchProduct";
import IProduct from "../../types/product.types";
import Spinner from "../../components/Spinner";
import * as C from "./styles";

export default function Product() {
  const { id } = useParams();
  const [status, error, fetchProduct] = useFetchProduct();
  const [favStatus, favError, createFavorite] = useCreateFavorite();

  const [product, setProduct] = useState<IProduct>();
  const [currentOption, setCurrentOption] = useState(0);
  const [currentSize, setCurrentSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        const product = await fetchProduct(id);
        setProduct(product);
      }
    };
    getProduct();
  }, [id]);

  const handleAddFavorite = (productId: string) => {
    createFavorite(productId);
  };

  const handleAddCart = () => {};

  return (
    <C.Section>
      {status === "loading" && (
        <C.Container>
          <Spinner />
        </C.Container>
      )}

      {status === "failure" && (
        <C.Container>
          <C.Error>{error}</C.Error>
        </C.Container>
      )}

      {status === "success" && product && (
        <>
          <C.ImagesContainer>
            {product.options[currentOption].images.map((image, key) => (
              <C.Image url={image.url} key={key} />
            ))}
          </C.ImagesContainer>

          <C.InformationContainer>
            <C.InformationWrapper>
              <C.Divider>
                {product.isNewProduct && <C.Category>NOVO</C.Category>}
                <C.Title>{product.name}</C.Title>
                <C.Description>{product.description}</C.Description>
              </C.Divider>

              <C.Wrapper>
                {!product.hasDiscount && <C.Price>R$ {product.price}</C.Price>}

                {product.hasDiscount && (
                  <>
                    <C.PriceDiscount>R$ {product.price}</C.PriceDiscount>
                    <C.Discount>R$ {product.discountPrice}</C.Discount>
                  </>
                )}
              </C.Wrapper>

              <C.Divider>
                <C.OptionsWrapper>
                  <C.OptionName>Size:</C.OptionName>
                  {product.options[currentOption].sizes.map((size, key) => (
                    <C.Option
                      key={key}
                      onClick={() => setCurrentSize(size)}
                      // @ts-ignore
                      isSelected={currentSize === size}
                    >
                      {size}
                    </C.Option>
                  ))}
                </C.OptionsWrapper>

                <C.OptionsWrapper>
                  <C.OptionName>Color:</C.OptionName>
                  {product.options.map((option, key) => (
                    <C.ColorBorder
                      key={key}
                      onClick={() => setCurrentOption(key)}
                      isSelected={currentOption === key}
                    >
                      <C.Color color={option.color} />
                    </C.ColorBorder>
                  ))}
                </C.OptionsWrapper>
              </C.Divider>

              <C.Divider>
                <C.Wrapper>
                  {product.isSoldOut && (
                    <C.Esgotado>Produto esgotado</C.Esgotado>
                  )}

                  {!product.isSoldOut && (
                    <C.Button onClick={handleAddCart}>
                      Adicionar ao carrinho
                    </C.Button>
                  )}

                  <C.Button onClick={() => handleAddFavorite(product._id)}>
                    {favStatus === "loading" ? (
                      <Spinner />
                    ) : (
                      "Adicionar a lista de desejos"
                    )}
                  </C.Button>
                </C.Wrapper>
              </C.Divider>
            </C.InformationWrapper>
          </C.InformationContainer>
        </>
      )}
    </C.Section>
  );
}
