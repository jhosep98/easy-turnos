import * as React from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  onSearch,
}) => {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md">
      <Input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-lg border-none bg-transparent focus:outline-hidden focus:ring-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />

      <button
        type="submit"
        className="absolute inset-y-0 left-0 pl-3 flex items-center"
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
};
