import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

const column: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "size", headerName: "Size", width: 150 },
  { field: "createdAt", headerName: "Creation Time", width: 200 },
];

const CompaniesGrid = ({ data }) => {
  return (
    <Box className="companies-grid">
      <DataGrid rows={data} columns={} />
    </Box>
  );
};

export default CompaniesGrid;
