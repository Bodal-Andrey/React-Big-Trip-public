const eventAdapter = (data) => {
  return {
    id: data.id,
    type: data.type,
    city: data.destination.name,
    startDate: new Date(data.date_from).getTime(),
    endDate: new Date(data.date_to).getTime(),
    price: data.base_price,
    description: data.destination.description,
    offers: data.offers,
    photos: data.destination.pictures,
    isFavorite: data.is_favorite,
  };
};

const createEventAdapter = (data) => {
  return {
    type: data.type,
    city: data.destination.name,
    startDate: new Date(data.date_from).getTime(),
    endDate: new Date(data.date_to).getTime(),
    price: data.base_price,
    description: data.destination.description,
    offers: data.offers,
    photos: data.destination.pictures,
    isFavorite: data.is_favorite,
  };
};

const destinationAdapter = (data) => {
  return {
    city: data.name,
    description: data.description,
    photos: data.pictures,
  };
};

const offerAdapter = (data) => {
  return {
    offers: data.offers,
  };
};

export {
  eventAdapter,
  destinationAdapter,
  offerAdapter,
  createEventAdapter,
};
