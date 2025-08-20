'use strict';

import axios from 'axios';

const myApiKey = '51799321-d2cea60cf5d9bf8518679ab71';
const BaseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: myApiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BaseURL, { params });
  return response.data;
}
