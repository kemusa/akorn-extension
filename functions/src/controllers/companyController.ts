import { CompaniesHouseService } from '../services/companiesHouseService';

export class CompanyController {
  companiesHouse = new CompaniesHouseService();

  public getCompanyOwners = async (companyId: string) => {
    return await this.companiesHouse.getOwners(companyId);
  };

  public getCompanyOfficers = async (companyId: string) => {
    return await this.companiesHouse.getOfficers(companyId);
  };
}
