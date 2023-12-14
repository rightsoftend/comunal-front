"use client";
import "../../styles/grid.scss";

export default function CompaniesGridRow(props) {
  const { edrpou, name, rah, services, contacts, contract, counter } =
    props.company;
  return (
    <>
      <div className="grid-row">{edrpou}</div>
      <div className="grid-row">{name}</div>
      <div className="grid-row">{rah}</div>
      <div className="grid-row">{services}</div>
      <div className="grid-row">{contacts}</div>
      <div className="grid-row">{contract}</div>
      <div className="grid-row">{counter}</div>
      <div className="grid-row">
        <button type="button">&#128196;</button>
        <button type="button">&#9997;</button>
        <button type="button">&#10007;</button>
      </div>
    </>
  );
}
