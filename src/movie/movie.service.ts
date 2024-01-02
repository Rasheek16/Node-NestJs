import { Injectable } from '@nestjs/common';
import { InputMovie } from './movie/movie.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './movie.entity/movie.entity';
import { Repository, DeleteResult} from 'typeorm';
@Injectable()
export class MovieService {
    constructor(@InjectRepository(Movie)
    private movieRepository:Repository<Movie>){}

    getAllMovies():Promise<Movie[]>{
        return this.movieRepository.find()
    }
    getOneMovie(id :number ):Promise<Movie>{
        return this.movieRepository.findOne({where:{id}})
    }
    createNewMovie(movie:InputMovie):Promise<Movie>{
        return this.movieRepository.save(movie)
    }
    updateMovie(id:number,movie:Movie):Promise<Movie>{
        return this.movieRepository.save(movie)
    }
    removeMovie(id:number):Promise<DeleteResult>{
        return this.movieRepository.delete(id)
    }
}
