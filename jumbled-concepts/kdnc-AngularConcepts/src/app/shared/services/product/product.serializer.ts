import * as moment from 'moment';

import { Product } from '../../models/domain';
import { Serializer } from '../serializer';

export class ProductSerializer implements Serializer {

  public fromJson(productJson: any): Product {
    const p = new Product();

    // p.id = caseJson.id;
    p.title = productJson.title;

    return p;
  }

  public toJson(p: Product): any {
    const productDto = {
      // id: p.id,
      title: p.title
    };

    return productDto;
  }
}
