"use client";
import "../../styles/grid.scss";

export default function CompaniesGridHeader() {
  return (
    <>
      <div className="grid-header">ЄДРПОУ</div>
      <div className="grid-header">Назва</div>
      <div className="grid-header">Рахунок</div>
      <div className="grid-header">Послуги</div>
      <div className="grid-header">Контакти</div>
      <div className="grid-header">Договір</div>
      <div className="grid-header">Лічильник</div>
      <div className="grid-header">Д / В / Р</div>
    </>
  );
}
