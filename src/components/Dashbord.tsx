import { useEffect, useState } from "react";
import { Mosaic, MosaicWindow, MosaicNode } from "react-mosaic-component";
import { Company } from "../types/types";
import CompanyCard from "./CompanyCard";
import { fetchCompanyData } from "./../services/api";
import { Intent, Spinner } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "react-mosaic-component/react-mosaic-component.css";

const mySpinner = <Spinner intent={Intent.PRIMARY} />;

const Dashbord = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mosaicState, setMosaicState] = useState<MosaicNode<string>>({
    direction: "row",
    first: "window1",
    second: {
      direction: "column",
      first: "window2",
      second: "window3",
    },
    splitPercentage: 50,
  });
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
  if (loading) return <div>{mySpinner}</div>;
  if (error) return <p>{error}</p>;

  const renderMosaicWindow = (id: string) => {
    const index = parseInt(id.replace("window", "")) - 1;
    const company = companies[index];

    if (company) {
      return <CompanyCard company={company} />;
    } else {
      return <div>{mySpinner}</div>;
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <Mosaic<string>
        renderTile={(id) => (
          <MosaicWindow<string> title={`Company info ${id}`} path={[id]}>
            <div className="h-full overflow-y-scroll">
              {renderMosaicWindow(id)}
            </div>
          </MosaicWindow>
        )}
        value={mosaicState}
        onChange={(newNode) => {
          console.log("New Mosaic State:", newNode);
          setMosaicState(newNode!);
        }}
      />
    </div>
  );
};

export default Dashbord;
