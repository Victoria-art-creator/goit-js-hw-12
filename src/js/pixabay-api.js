'use strict';

import axios from 'axios';

const myApiKey = '51799321-d2cea60cf5d9bf8518679ab71';
const BaseURL = 'https://pixabay.com/api/';
const PerPage = 15;

export async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios.get(BaseURL, {
      params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: PerPage,
        page,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Request error to Pixabay API:', error);
    throw error;
  }
}
