import "./styles.css";

const Table = ({ players }) => {
  return (
    <div className="container">
      <div className="heading">
        <p className="title_tab">Player</p>
        <p className="genre_tab">Position</p>
        <p className="genre_tab">Age</p>
        <p className="rating_tab">Country</p>
        <p className="rating_tab">Cost</p>
      </div>
      {players.map((player) => (
        <div className="movie" key={player._id}>
          <div className="title_container">
            {/* <img src={player.img} alt="movie" className={styles.movie_img} /> */}
            <p className="movie_title">
              {player.name} ({player.club})
            </p>
          </div>
          <div className="genre_container">
            {player.position.map((position, index) => (
              <p key={position} className="movie_genre">
                {position}
                {index !== player.position.length - 1 && "/"}
              </p>
            ))}
          </div>

          <div className="genre_container">
            <p className="movie_genre">{player.age}</p>
          </div>

          <div className="rating_container">
            {/* <img
              src="./images/star.png"
              alt="star"
              className={styles.star_img}
            /> */}
            <p className="movie_rating">{player.country}</p>
          </div>
          <div className="rating_container">
            {/* <img
              src="./images/star.png"
              alt="star"
              className={styles.star_img}
            /> */}
            <p className="movie_rating">${player.valueInMillions}M</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
