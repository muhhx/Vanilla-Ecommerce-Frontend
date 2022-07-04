import * as C from "./styles";

interface IProps {
  name: string;
  filterState: string | null;
  setFilterState: (value: React.SetStateAction<string | null>) => void;
  options: {
    _id: string;
    name: string;
  }[];
}

export default function Filter({
  name,
  filterState,
  options,
  setFilterState,
}: IProps) {
  return (
    <C.Row>
      <C.FilterName>{name}</C.FilterName>
      {options.map((option, key) => (
        <C.Option
          key={key}
          onClick={() =>
            setFilterState(filterState === option._id ? null : option._id)
          }
          isClicked={filterState === option._id}
        >
          {option.name}
        </C.Option>
      ))}
    </C.Row>
  );
}
