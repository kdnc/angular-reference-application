import * as moment from 'moment';

import { Product } from '../../models/domain';
import { Serializer } from '../serializer';

export class ProductSerializer implements Serializer {

  public fromJson(productJson: any): Product {
    const p = new Product();

    // p.id = caseJson.id;
    p.Title = productJson.Title;

    return p;
  }

  public toJson(p: Product): any {
    const caseDto = {
      // id: p.id,
      Title: p.Title
    };

    return caseDto;
  }
}
