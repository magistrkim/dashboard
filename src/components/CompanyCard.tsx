import React from "react";
import { Company } from "../types/types";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className="border p-4 m-2">
      <h2 className="text-lg font-semibold text-teal-800">
        {company.name} ({company.ticker})
      </h2>
      <p className="text-sm font-medium text-zinc">LEI: {company.lei}</p>
      <p className="text-sm font-medium text-zinc">
        Legal Name: {company.legal_name}
      </p>
    </div>
  );
};

export default CompanyCard;
