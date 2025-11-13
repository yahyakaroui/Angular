import { OrderByLikesPipe } from './order-by-likes.pipe';

describe('OrderByLikesPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByLikesPipe();
    expect(pipe).toBeTruthy();
  });
});
