import { useState } from "react";
import { ICreateCompanyDto } from "../../types/global.typing";
import { TextField } from "@mui/material";

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
      </div>
    </div>
  );
};

export default AddCompany;
