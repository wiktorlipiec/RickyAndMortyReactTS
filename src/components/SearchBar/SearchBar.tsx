import { Input } from './SearchBar.style';

interface ISearchBarProps {
  onSearch: (name: string) => void;
}

export const SearchBar: React.FC<ISearchBarProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <Input
      type="text"
      placeholder="Search characters"
      onChange={handleSearch}
    />
  );
};
