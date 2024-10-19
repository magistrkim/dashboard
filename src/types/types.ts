import { Spec } from "immutability-helper";

export type Company = {
  id: string;
  ticker: string;
  name: string;
  lei: string;
  legal_name: string;
  stock_exchange: string;
  sic: number;
  short_description: string;
  long_description: string;
  ceo: string;
  company_url: string;
  business_address: string;
  mailing_address: string;
  business_phone_no: string;
  hq_address1: string;
  hq_address2: string | null;
  hq_address_city: string;
  hq_address_postal_code: string;
  entity_legal_form: string;
  cik: string;
  latest_filing_date: string;
  hq_state: string;
  hq_country: string;
  inc_state: string;
  inc_country: string;
  employees: number;
  entity_status: string;
  sector: string;
  industry_category: string;
  industry_group: string;
  template: string;
  standardized_active: boolean;
  first_fundamental_date: string;
  last_fundamental_date: string;
  first_stock_price_date: string;
  last_stock_price_date: string;
  thea_enabled: boolean;
  legacy_sector: string;
  legacy_industry_category: string;
  legacy_industry_group: string;
};

export type Companies = Company[];

export type MosaicKey = string | number;

export type MosaicDirection = "row" | "column";

export interface MosaicParent<T extends MosaicKey> {
  direction: MosaicDirection;
  first: MosaicNode<T>;
  second: MosaicNode<T>;
  splitPercentage?: number;
}
export type MosaicNode<T extends MosaicKey> = MosaicParent<T> | T;

export type MosaicUpdateSpec<T extends MosaicKey> = Spec<MosaicNode<T>>;

export type MosaicBranch = "first" | "second";
export type MosaicPath = MosaicBranch[];

export interface MosaicUpdate<T extends MosaicKey> {
  path: MosaicPath;
  spec: MosaicUpdateSpec<T>;
}
