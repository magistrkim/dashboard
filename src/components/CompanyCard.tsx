import React from "react";
import { Company } from "../types/types";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <ul className="p-4 m-2 text-sm font-bold text-zinc">
      <li className="mb-2">
        ticker: <span className="font-normal">{company.ticker}</span>{" "}
      </li>
      <li className="mb-2">
        Name: <span className="font-normal">{company.name}</span>{" "}
      </li>
      <li className="mb-2">
        Legal name: <span className="font-normal">{company.legal_name}</span>{" "}
      </li>
      <li className="mb-2">
        Stock exchange:{" "}
        <span className="font-normal">{company.stock_exchange}</span>{" "}
      </li>
      <li className="mb-2">
        Short description:{" "}
        <span className="font-normal">{company.short_description}</span>{" "}
      </li>
      <li className="mb-2">
        Long description:{" "}
        <span className="font-normal">{company.long_description}</span>{" "}
      </li>
      <li className="mb-2">
        Web: <span className="font-normal">{company.company_url}</span>{" "}
      </li>
      <li className="mb-2">
        Business address:{" "}
        <span className="font-normal">{company.business_address}</span>{" "}
      </li>
      <li className="mb-2">
        Business phone:{" "}
        <span className="font-normal">{company.business_phone_no}</span>{" "}
      </li>
      <li className="mb-2">
        Entity legal form:{" "}
        <span className="font-normal">{company.entity_legal_form}</span>{" "}
      </li>
      <li className="mb-2">
        Latest filing date:{" "}
        <span className="font-normal">{company.latest_filing_date}</span>{" "}
      </li>
      <li className="mb-2">
        Inc country: <span className="font-normal">{company.inc_country}</span>{" "}
      </li>
      <li className="mb-2">
        Emploeeys: <span className="font-normal">{company.employees}</span>{" "}
      </li>
      <li className="mb-2">
        Sector: <span className="font-normal">{company.sector}</span>{" "}
      </li>
      <li className="mb-2">
        Industry category:{" "}
        <span className="font-normal">{company.industry_category}</span>{" "}
      </li>
      <li className="mb-2">
        Industry group:{" "}
        <span className="font-normal">{company.industry_group}</span>{" "}
        <p className="font-normal">
          first_stock_price_date {company.first_stock_price_date}
        </p>{" "}
        <p className="font-normal">
          last_stock_price_date {company.last_stock_price_date}
        </p>{" "}
      </li>
      <li className="mb-2">
        Thea enabledtruelegacy sector:{" "}
        <span className="font-normal">{company.thea_enabled}</span>{" "}
      </li>
      <li className="mb-2">
        Legacy industry category:{" "}
        <span className="font-normal">{company.legacy_industry_category}</span>{" "}
      </li>
      <li className="mb-2">
        Legacy industry group:{" "}
        <span className="font-normal">{company.legacy_industry_group}</span>{" "}
      </li>
    </ul>
  );
};

export default CompanyCard;
