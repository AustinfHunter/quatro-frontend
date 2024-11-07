import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const AbridgedNutrientTable = ({ nutrients }) => {
  return (
    <TableContainer style={{ marginBottom: "5px" }}>
      <Table aria-label="nutrient table (per 100 grams)">
        <TableHead>
          <TableRow>
            <TableCell>Calories</TableCell>
            <TableCell>Fat&nbsp;(g)</TableCell>
            <TableCell>Carbs&nbsp;(g)</TableCell>
            <TableCell>Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              {
                nutrients.find(
                  (nutrient) => nutrient.nutrient.name === "Energy",
                ).amount
              }
            </TableCell>
            <TableCell>
              {
                nutrients.find(
                  (nutrient) => nutrient.nutrient.name === "Total lipid (fat)",
                ).amount
              }
            </TableCell>
            <TableCell>
              {
                nutrients.find(
                  (nutrient) =>
                    nutrient.nutrient.name === "Carbohydrate, by difference",
                ).amount
              }
            </TableCell>
            <TableCell>
              {
                nutrients.find(
                  (nutrient) => nutrient.nutrient.name === "Protein",
                ).amount
              }
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AbridgedNutrientTable;
