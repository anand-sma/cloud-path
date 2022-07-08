const GetCoords = () => {
  export const getCoords = () => {
    {
      navigator.geolocation.getCurrentPosition((position) =>
        console.log(position)
      );
    }
  };

  return (
    <div>
      <h3>Coords ... {position}</h3>
    </div>
  );
};

export default GetCoords;
