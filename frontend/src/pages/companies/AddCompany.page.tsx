import { useState } from "react";
import { ICreateCompanyDto } from "../../types/global.typing";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const AddCompany = () => {
  const [company, setCompany] = useState<ICreateCompanyDto>({
    name: "",
    size: "",
  });
  return (
    <div className="content">
      <div className="add-company">
        <h2>Add New Company</h2>
        <TextField
          autoComplete="off"
          label="Company Name"
          variant="outlined"
          value={company.name}
          onChange={(e) => setCompany({ ...company, name: e.target.value })}
        />
        <FormControl fullWidth>
          <InputLabel>Company Size</InputLabel>
          <Select
            value={company.size}
            label="Company Size"
            onChange={(e) => setCompany({ ...company, size: e.target.value })}
          >
            <MenuItem value="Small">Small</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Large">Large</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default AddCompany;
