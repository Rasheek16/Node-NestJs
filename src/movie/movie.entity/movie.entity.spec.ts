import { Movie } from './movie.entity';

describe('Movie', () => {
  it('should be defined', () => {
    expect(new Movie()).toBeDefined();
  });
});
