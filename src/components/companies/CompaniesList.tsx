"use client";
import CompaniesGridHeader from "./CompaniesGridHeader";
import CompaniesGridRow from "./CompaniesGridRow";

//import "../../../styles/grid.scss";

export default function CompaniesList(props) {
  return (
    <>
      <h1>Список організацій</h1>
      <div className="grid-wrapper">
        <CompaniesGridHeader />
        {props.companies.map((company, index) => (
          <CompaniesGridRow company={company} key={index}></CompaniesGridRow>
        ))}
      </div>
    </>
  );
}
