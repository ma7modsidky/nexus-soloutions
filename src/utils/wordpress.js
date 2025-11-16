// utils/wordpress.js
import axios from 'axios';

const API_URL = 'https://api.nexussoloutions.com/wp-json';

export const wp = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' }
});


// Helper functions
export async function getPosts(query = '') {
  try {
    const res = await wp.get(`/wp/v2/posts?_embed${query}`);
    return {
      posts: res.data,
      totalPages: parseInt(res.headers['x-wp-totalpages']) || 1,
      totalPosts: parseInt(res.headers['x-wp-total']) || 0
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { posts: [], totalPages: 1, totalPosts: 0 };
  }
}

// Remove or update getPostsCount since we're getting the data from getPosts
export async function getPostsCount() {
  try {
    const res = await wp.get('/wp/v2/posts?per_page=1');
    return {
      totalPosts: parseInt(res.headers['x-wp-total']) || 0,
      totalPages: parseInt(res.headers['x-wp-totalpages']) || 0
    };
  } catch (error) {
    console.error('Error fetching posts count:', error);
    return { totalPosts: 0, totalPages: 0 };
  }
}

export async function getPostBySlug(slug) {
try {
    const res = await wp.get(`/wp/v2/posts?slug=${slug}&_embed`);
    return res.data[0]
} catch  (error) {
    console.error('Error fetching post:', error);
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

export async function getJobBySlug(slug) {
try {
    const res = await wp.get(`/wp/v2/jobs?slug=${slug}&_embed`);
    return res.data[0]
} catch  (error) {
    console.error('Error fetching job:', error);
    return [];
}
}

// Submit directly to CF7's endpoint
// export async function submitContactForm(formData) {
//   try {
//     const response = await wp.post('/contact-form-7/v1/contact-forms/22/feedback', {
//       'your-name': formData.name,
//       'your-company': formData.company,
//       'your-email': formData.email,
//       'your-phone': formData.phone,
//       'your-service': formData.service,
//       'your-message': formData.message
//     }, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Form submission error:', error.response?.data || error.message);
//     throw error;
//   }
// }

export async function submitContactForm(formData) {
  try {
    const multipartForm = new FormData();
    multipartForm.append('your-name', formData.name);
    multipartForm.append('your-company', formData.company);
    multipartForm.append('your-email', formData.email);
    multipartForm.append('your-phone', formData.phone);
    multipartForm.append('your-service', formData.service);
    multipartForm.append('your-message', formData.message);
    multipartForm.append("_wpcf7_unit_tag", "'wpcf7-2722d5f'");

    const response = await wp.post(
      '/contact-form-7/v1/contact-forms/22/feedback',
      multipartForm,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Form submission error:', error.response?.data || error.message);
    throw error;
  }
}
