import { ArrowDropDown, ArrowDropUp, Delete } from "@mui/icons-material";
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
import AbridgedNutrientTable from "./AbridgedNutrientTable";

const FoodTableRow = ({ data, handleDelete }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  console.log(data);
  if (!data) {
    return null;
  }
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
          <Button onClick={() => setDetailsOpen(!detailsOpen)}>
            Details
            {detailsOpen === true ? <ArrowDropUp /> : <ArrowDropDown />}
          </Button>
          <Button onClick={() => handleDelete(data.fdcId)}>
            <Delete color={"error"} />
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingTop: 0, paddingBottom: 0 }} colSpan={3}>
          <Collapse in={detailsOpen} timeout={"auto"} unmountOnExit>
            <AbridgedNutrientTable nutrients={data.foodNutrients} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const FoodOptionsTable = ({ data, handleDelete }) => {
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
            <TableCell
              sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
              align="left"
            >
              Description
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
              align="left"
            >
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
        {data.map((food) => (
          <FoodTableRow
            key={food.fdcId}
            data={food}
            handleDelete={handleDelete}
          />
        ))}
      </Table>
    </TableContainer>
  );
};

export default FoodOptionsTable;
