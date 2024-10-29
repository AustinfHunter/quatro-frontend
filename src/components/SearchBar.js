import { Search } from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";

const SearchBar = ({ handleQuery }) => {
  return (
    <Box height={"3rem"} width="100%" textAlign={"left"}>
      <Form>
        <FormControl fullWidth>
          <TextField
            onInput={(e) => handleQuery(e.target.value)}
            placeholder="Search for foods"
            variant={"standard"}
            size={"normal"}
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                ),
              },
            }}
          />
        </FormControl>
      </Form>
    </Box>
  );
};

export default SearchBar;
