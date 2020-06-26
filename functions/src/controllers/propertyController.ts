import { BigQuery } from '@google-cloud/bigquery';

interface QueryOptions {
  query: string;
  location: string;
  useLegacySql: boolean;
  params: any;
}

export class PropertyController {
  private _bigquery = new BigQuery();

  public getLandRegMatches = async (postcode: string) => {
    const options: QueryOptions = {
      query: this._propertyOwnerQuery,
      location: 'US',
      useLegacySql: false,
      params: { postcode },
    };
    // Run the query as a job
    const [job] = await this._bigquery.createQueryJob(options);
    console.info(`Job ${job.id} started.`);
    // Wait for the query to finish
    const [rows] = await job.getQueryResults();
    return rows;
  };

  public getAllCompanyProperties = async (companyRegNo: string) => {
    const options: QueryOptions = {
      query: this._findAllPropertiesQuery,
      location: 'US',
      useLegacySql: false,
      params: { companyRegNo },
    };
    // Run the query as a job
    const [job] = await this._bigquery.createQueryJob(options);
    console.info(`Job ${job.id} started.`);
    // Wait for the query to finish
    const [rows] = await job.getQueryResults();
    return rows;
  };

  private get _propertyOwnerQuery() {
    return `SELECT 
      Property_Address as land_reg_property_address,
      Postcode as postcode, 
      Tenure as tenure,
      Proprietor_Name_1 as company_name,
      Company_Registration_No_1 as company_reg_no, 
      Proprietorship_Category_1 as proprietorship_category, 
      Proprietor_1_Address_1 as company_address,
      Title_Number as title_no 
    FROM 
      \`project-acorn-889f4.uk_land_registry.uk_lr\` 
    WHERE 
      Postcode = @postcode`;
  }

  private get _findAllPropertiesQuery() {
    return `SELECT
    Postcode as postcode, 
    Property_Address as land_reg_property_address,
    Tenure as tenure,
    Proprietor_Name_1 as company_name,
    Company_Registration_No_1, 
    Proprietorship_Category_1 as proprietorship_category, 
    Proprietor_1_Address_1 as company_address,
    Title_Number as title_no 
FROM
  \`project-acorn-889f4.uk_land_registry.uk_lr\`
WHERE 
  Company_Registration_No_1 = @companyRegNo`;
  }
}
