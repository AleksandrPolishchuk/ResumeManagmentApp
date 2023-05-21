export interface ICompany {
  id: string;
  name: string;
  size: string;
  createdAt: string;
}

export interface ICreateCompanyDto {
  name: string;
  size: string;
}
