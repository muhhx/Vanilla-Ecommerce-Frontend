import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectProducts } from "../../../features/productsSlice";
import { IFavorite } from "../../../types/user.types";
import IProduct from "../../../types/product.types";
import useRemoveFavorite from "../../../hooks/useRemoveFavorite";
import * as C from "./styles";

export default function Favorites({ favorites }: { favorites: IFavorite[] }) {
  const [favoriteProducts, setFavoriteProducts] = useState<IProduct[]>([]);
  const { products } = useSelector(selectProducts);
  const [status, error, removeFavorite] = useRemoveFavorite();

  useEffect(() => {
    const arr = favorites.map((favorite) => favorite.productId);
    setFavoriteProducts(
      products.filter((product) => arr.includes(product._id))
    );
  }, [products, favorites]);

  const handleRemoveFavorite = (productId: string) => {
    const favorite = favorites.filter(
      (favorite) => favorite.productId === productId
    )[0];
    removeFavorite(favorite._id);
  };

  return (
    <C.Container>
      <C.Wrapper>
        {!favoriteProducts || favoriteProducts.length === 0 ? (
          <C.Center>
            <C.Span>Você não possui nenhum item salvo</C.Span>
          </C.Center>
        ) : (
          favoriteProducts.map((favorite, key) => (
            <C.Frame key={key} orderStatus={key % 2 === 0 ? true : false}>
              <C.Number>{key + 1}</C.Number>
              <Link
                key={key}
                to={`/product/${favorite._id}`}
                style={{ height: "90%" }}
              >
                <C.Image url={favorite.thumb} />
              </Link>
              <C.Description>
                <C.InfoWrapper>
                  <C.Name>{favorite.name}</C.Name>
                  <C.Category>{favorite.collectionId}</C.Category>
                </C.InfoWrapper>
                <C.Delete onClick={() => handleRemoveFavorite(favorite._id)}>
                  REMOVE
                </C.Delete>
              </C.Description>
            </C.Frame>
          ))
        )}
      </C.Wrapper>
    </C.Container>
  );
}
