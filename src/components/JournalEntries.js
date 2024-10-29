import {
  Box,
  Button,
  CircularProgress,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  Add,
  ArrowDropDown,
  ArrowDropUp,
  Delete,
  Edit,
} from "@mui/icons-material";
import EditJournalEntryDialog from "./EditJournalEntryDialog";
import JournalNutrientTable from "./JournalNutrientTable";
import dayjs from "dayjs";
import DeleteJournalEntryDialog from "./DeleteJournalEntryDialog";
import FoodSearchDialog from "./FoodSearchDialog";

const EntriesTableRow = ({ data, onJournalUpdate }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [entryEditorOpen, setEntryEditorOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {}, [data]);

  return (
    <>
      <TableRow>
        <TableCell>
          {data.food.description.length < 40
            ? data.food.description
            : data.food.description.substring(0, 40) + "..."}
        </TableCell>
        <TableCell>
          {data.food.brandOwner === "" ? "N/A" : data.food.brandOwner}
        </TableCell>
        <TableCell align={"center"}>
          <Button onClick={() => setDetailsOpen(!detailsOpen)} display={"flex"}>
            Nutrition Details
            {detailsOpen === true ? <ArrowDropUp /> : <ArrowDropDown />}
          </Button>
          <Button onClick={() => setEntryEditorOpen(true)}>
            <Edit color="action" />
          </Button>
          <Button onClick={() => setDeleteOpen(true)}>
            <Delete color="error" />
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingTop: 0, paddingBottom: 0 }} colSpan={3}>
          <Collapse in={detailsOpen} timeout={"auto"} unmountOnExit>
            <JournalNutrientTable nutrients={data.food.foodNutrients} />
          </Collapse>
        </TableCell>
      </TableRow>
      <EditJournalEntryDialog
        onJournalUpdate={onJournalUpdate}
        entryId={data.id}
        fdcId={data.food.fdcId}
        initialAmountConsumed={data.amount_consumed_grams}
        initialDate={data.date}
        open={entryEditorOpen}
        setOpen={setEntryEditorOpen}
        description={data.food.description}
      />
      <DeleteJournalEntryDialog
        onJournalUpdate={onJournalUpdate}
        entryId={data.id}
        description={data.food.description}
        date={dayjs(data.date)}
        amountConsumed={data.amount_consumed_grams}
        open={deleteOpen}
        setOpen={setDeleteOpen}
      />
    </>
  );
};

const EntriesTable = ({ data, onJournalUpdate, loading }) => {
  useEffect(() => {}, [data]);
  if (loading) {
    return <CircularProgress />;
  }

  return (
    <TableContainer sx={{ maxHeight: "800px" }}>
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
        <TableBody>
          {data.journal_entries.map((entry) => (
            <EntriesTableRow
              key={entry.id}
              data={entry}
              handleViewDetails={() => {}}
              onJournalUpdate={onJournalUpdate}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const JournalEntries = ({ data, date, onJournalUpdate, loading }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {}, [data, loading, onJournalUpdate]);
  if (!data) {
    return <CircularProgress />;
  }

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
        alignItems={"start"}
        marginTop={"1.2rem"}
        marginBottom={"1rem"}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"start"}
          marginTop={"1.2rem"}
          marginBottom={"1rem"}
          width={"100%"}
        >
          <Typography variant="h4" textAlign={"left"}>
            {date.format("YYYY-MM-DD") ===
            dayjs(new Date()).format("YYYY-MM-DD")
              ? "Today's Food"
              : `Food From ${date.format("dddd, MMMM D, YYYY")}`}
          </Typography>
          <Button onClick={() => setSearchOpen(true)}>
            Add to Journal
            <Add color={"info"} />
          </Button>
        </Box>
        <EntriesTable
          data={data}
          onJournalUpdate={onJournalUpdate}
          loading={loading}
        />
      </Box>
      <Box minWidth={"100%"}>
        <FoodSearchDialog
          open={searchOpen}
          setOpen={setSearchOpen}
          onJournalUpdate={onJournalUpdate}
          date={date}
        />
      </Box>
    </>
  );
};

export default JournalEntries;
