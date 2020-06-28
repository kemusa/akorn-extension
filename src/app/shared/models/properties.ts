interface Property {}

interface Match {
  land_reg_property_address: string;
  postcode: string;
  tenure: string;
  company_name: string;
  company_reg_no: string;
  proprietorship_category: string;
  company_address: string;
  title_no: string;
}

interface MatchObject {
  matches: Match[];
  job: any;
  gmapAddress: string;
}
