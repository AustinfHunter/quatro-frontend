import { Box } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { searchFoods } from "../services/userService";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const SearchComponent = ({ onJournalUpdate }) => {
  const [data, setData] = useState(null);

  const handleQuery = (query) => {
    searchFoods(query)
      .then((res) => setData(res.data))
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <Box
      margin={"20px"}
      padding={"20px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"start"}
      alignItems={"start"}
    >
      <SearchBar handleQuery={handleQuery} />
      <SearchResults data={data} onJournalUpdate={onJournalUpdate} />
    </Box>
  );
};

export default SearchComponent;
