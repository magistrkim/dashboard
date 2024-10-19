import React, { useEffect, useState } from "react";
import { fetchCompanyData } from "../services/api";
import { Company } from "../types/types";
import CompanyCard from "./CompanyCard";

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCompanyData();
        setCompanies(data);
      } catch (error) {
        setError("Error fetching company data");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
};

export default CompanyList;
