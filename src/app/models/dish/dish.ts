export class Dish {
  id: number;
  name: string;
  description: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
