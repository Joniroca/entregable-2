export const getCoordinates = async () => {
  try {
    const position = await new Promise((resolve, rejected) => {
      navigator.geolocation.getCurrentPosition(resolve, rejected);
    });

    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
  } catch (e) {
    // return console.error(e);
    return null;
  }
};

// export const getCoordinates = () => {
//   navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     () => console.error("sin permisos!!!!!!!!!!!")
//   );
// };
