import { Movie } from './Movie';

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <div className="NFwrap">
                    <h4>Not Found</h4>
                    <h5>404</h5>
                </div>
            )}
        </div>
    );
}

export { Movies };