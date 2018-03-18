import * as moment from 'moment';

import { Product } from '../../models/domain';
import { Serializer } from '../serializer';

export class ProductSerializer implements Serializer {

  public fromJson(caseJson: any): Product {
    const p = new Product();

    p.id = caseJson.id;
    p.createdOn = moment.utc(caseJson.createdOn, 'YYYY-MM-DDTHH:mm:ssZ');
    p.createdBy = caseJson.createdBy;
    p.assignee = caseJson.assignee;
    p.name = caseJson.name;

    return p;
  }

  public toJson(p: Product): any {
    const caseDto = {
      id: p.id,
      createdOn: moment.utc(p.createdOn).format('YYYY-MM-DDTHH:mm:ssZ'),
      createdBy: p.createdBy,
      assignee: p.assignee,
      name: p.name
    };

    return caseDto;
  }
}
