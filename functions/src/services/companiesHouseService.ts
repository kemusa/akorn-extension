import axios from 'axios';

export class CompaniesHouseService {
  private API_KEY = '11CNI2OLRU2bCH9UEK9brikXHFP7G8DesUalgmOT';
  private BASE_URL = 'https://api.companieshouse.gov.uk';

  public getOwners = async (companyId: string) => {
    try {
      const { data } = await axios.get(
        `${this.BASE_URL}/company/${companyId}/persons-with-significant-control`,
        {
          auth: { username: this.API_KEY, password: '' },
        }
      );
      return data;
    } catch (error) {
      return { items: [], total_results: 0 };
    }
  };

  public getOfficers = async (companyId: string) => {
    try {
      const { data } = await axios.get(
        `${this.BASE_URL}/company/${companyId}/officers`,
        {
          auth: { username: this.API_KEY, password: '' },
        }
      );
      return data;
    } catch (error) {
      return { items: [], total_results: 0 };
    }
  };
}
