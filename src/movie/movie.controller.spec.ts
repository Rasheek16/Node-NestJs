import { Test, TestingModule } from '@nestjs/testing';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

describe('MovieController', () => {
  let controller: MovieController;
  let service:MovieService


  const movies=[
    {
      id:1,
      title:'Iron Man',
      year:2008
    }
  ]

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
      providers:[
        {
          provide:MovieService,
          useValue:{
            async getAllMovies(){
              return movies;
            }
          }
        }
      ]
    }).compile();

    controller = module.get<MovieController>(MovieController);
    service = module.get<MovieService>(MovieService);
  });

  it('should return all movies', async () => {
    const result = await controller.getAllMovies();
    expect(result).toStrictEqual([
      {
        id:1,
        title:'Iron Man',
        year:2008

      }
    ]);
  });
});
