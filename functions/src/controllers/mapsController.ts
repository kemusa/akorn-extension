import axios, { AxiosResponse } from 'axios';

export class MapsController {
  private API_KEY = 'AIzaSyDsmEl_gEnUhfkdfsWTcSOxR9fMz_SiwQc';
  private BASE_URL =
    'https://maps.googleapis.com/maps/api/place/textsearch/json';
  private DETAILS_BASE_URL =
    'https://maps.googleapis.com/maps/api/place/details/json';

  private _placeView: any = null;
  private _placeDetail: any = null;

  public getPlaceData = async (queryString: string) => {
    try {
      const places = await this._getPlacesList(queryString);
      if (places.results.length > 0) {
        this._placeView = places.results[0];
        const place = await this._getPlaceDetails(this._placeView.place_id);
        this._placeDetail = place.result;
        return this._placeConstructor();
      }
      return null;
    } catch (error) {
      console.error(error.stack);
      return null;
    }
  };

  private _getPlacesList = async (queryString: string) => {
    try {
      const res: AxiosResponse = await axios.get(
        `${this.BASE_URL}?query=${queryString}&key=${this.API_KEY}`
      );
      return res.data;
    } catch (error) {
      console.error(error.stack);
    }
  };

  private _getPlaceDetails = async (placeID: string) => {
    try {
      const res: AxiosResponse = await axios.get(
        `${this.DETAILS_BASE_URL}?place_id=${placeID}&fields=address_components,formatted_phone_number&key=${this.API_KEY}`
      );
      return res.data;
    } catch (error) {
      console.error(error.stack);
    }
  };

  private _parseGMapsAddress = (addressComponents: any) => {
    const address: any = {};
    addressComponents.forEach((component: any) => {
      const type = component.types.filter(this._addressComponentsFilter);
      const addressComponent = this._getComponentTitle(type[0]);
      if (addressComponent) address[addressComponent] = component.long_name;
    });
    return address;
  };

  private _addressComponentsFilter = (type: any) => {
    const types = [
      'street_number',
      'route',
      'neighborhood',
      'postal_town',
      'country',
      'postal_code',
    ];
    return types.includes(type);
  };

  private _getComponentTitle = (type: any) => {
    let key;
    switch (type) {
      case 'street_number':
        key = 'building_unit';
        break;
      case 'route':
        key = 'address_line_1';
        break;
      case 'neighborhood':
        key = 'district';
        break;
      case 'postal_town':
        key = 'city';
        break;
      case 'country':
        key = type;
        break;
      case 'postal_code':
        key = 'postcode';
        break;
      default:
        key = null;
    }
    return key;
  };

  _placeConstructor = () => {
    const address = this._parseGMapsAddress(
      this._placeDetail.address_components
    );
    const {
      place_id,
      name,
      formatted_address,
      rating,
      user_ratings_total,
    } = this._placeView;
    return {
      google_place_id: place_id,
      name,
      formatted_address,
      rating,
      user_ratings_total,
      ...address,
    };
  };
}
