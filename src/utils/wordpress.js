// utils/wordpress.js
import axios from 'axios';

const API_URL = 'https://nexussoloutions.com/wp-json';

export const wp = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' }
});


// Helper functions
export async function getPosts() {
  try {
      const res = await wp.get('/wp/v2/posts?_embed');
      return res.data
  } catch  (error) {
      console.error('Error fetching posts:', error);
      return [];
  }
}

export async function getPostBySlug(slug) {
try {
    const res = await wp.get(`/wp/v2/posts?slug=${slug}&_embed`);
    return res.data[0]
} catch  (error) {
    console.error('Error fetching posts:', error);
    return [];
}
}

export async function getJobs() {
  try {
    const res = await wp.get('/wp/v2/jobs?acf_format=standard&_embed');
    return res.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
}