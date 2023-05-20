import { useEffect, useState } from "react";
import "./companies.scss";
import httpModule from "../../helpers/http.module";
import { ICompany } from "../../types/global.typing";

const Companies = () => {
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    httpModule
      .get<ICompany[]>("/Company/Get")
      .then((response) => {
        setCompanies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
        setLoading(false);
      });
  }, []);

  console.log(companies);

  return <div>Companies.page</div>;
};

export default Companies;
