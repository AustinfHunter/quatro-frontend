import { Box } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { searchFoods } from "../services/userService";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const SearchComponent = ({ onJournalUpdate, date }) => {
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
      minHeight={"700px"}
    >
      <SearchBar handleQuery={handleQuery} />
      <Box minHeight="80%" width="100%">
        <SearchResults
          data={data}
          onJournalUpdate={onJournalUpdate}
          date={date}
        />
      </Box>
    </Box>
  );
};

export default SearchComponent;
