import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import {
  Button,
  Collapse,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import AddToJournalDialog from "./AddToJournalDialog";
import NutrientTable from "./NutrientTable";

const ResultsTableRow = ({ data, onJournalUpdate, date }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [journalOpen, setJournalOpen] = useState(false);
  return (
    <>
      <TableRow>
        <TableCell>
          {data.description.length < 40
            ? data.description
            : data.description.substring(0, 40) + "..."}
        </TableCell>
        <TableCell>
          {data.brandOwner === "" ? "N/A" : data.brandOwner}
        </TableCell>
        <TableCell align={"center"}>
          <Button onClick={() => setJournalOpen(true)}>Add to Journal</Button>
          <Button onClick={() => setDetailsOpen(!detailsOpen)}>
            Nutrition Details
            {detailsOpen === true ? <ArrowDropUp /> : <ArrowDropDown />}
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingTop: 0, paddingBottom: 0 }} colSpan={3}>
          <Collapse in={detailsOpen} timeout={"auto"} unmountOnExit>
            <NutrientTable nutrients={data.foodNutrients} />
          </Collapse>
        </TableCell>
      </TableRow>
      <AddToJournalDialog
        fdcId={data.fdcId}
        description={data.description}
        open={journalOpen}
        setOpen={setJournalOpen}
        onJournalUpdate={onJournalUpdate}
        initialDate={date}
      />
    </>
  );
};

const SearchResults = ({ data, onJournalUpdate, date }) => {
  if (!data) {
    return null;
  }

  return (
    <TableContainer
      sx={{ maxHeight: "600px" }}
      style={{ width: "100%", height: "80%" }}
    >
      <Table stickyHeader aria-label={"food search results"}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Description
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
              Brand
            </TableCell>
            <TableCell
              align={"center"}
              sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        {data.foods.map((food) => (
          <ResultsTableRow
            key={food.fdcId}
            data={food}
            handleViewDetails={() => {}}
            onJournalUpdate={onJournalUpdate}
            date={date}
          />
        ))}
      </Table>
    </TableContainer>
  );
};

export default SearchResults;
