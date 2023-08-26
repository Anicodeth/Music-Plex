import { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosResponse } from 'axios';

const GENIUS_API_BASE_URL = 'http://api.genius.com';

// Replace this with your actual Genius API access token
const ACCESS_TOKEN = 'Ca0Tr3GOPKKfLBzw1tepk7Pf-DvqUntht9uC7SN4sd2Y9ALRLupVGej7pEWI7X8j';

const axiosInstance = axios.create({
  baseURL: GENIUS_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

interface SearchResult {
        meta: {
          status: number;
        };
        response: {
          hits: {
            index: string;
            type: string;
            result: {
              annotation_count: number;
              api_path: string;
              artist_names: string;
              full_title: string;
              header_image_thumbnail_url: string;
              header_image_url: string;
              id: number;
              lyrics_owner_id: number;
              lyrics_state: string;
              path: string;
              pyongs_count: number;
              release_date_components: {
                year: number;
                month: number;
                day: number;
              };
              song_art_image_thumbnail_url: string;
              song_art_image_url: string;
              stats: {
                unreviewed_annotations: number;
                concurrents: number;
                hot: boolean;
                pageviews: number;
              };
              title: string;
              title_with_featured: string;
              url: string;
              featured_artists: any[];
              primary_artist: {
                api_path: string;
                id: number;
                name: string;
                url: string;
                iq: number;
              };
            };
          }[];
        };
      }

      export const searchDocuments = async (term: string): Promise<SearchResult> => {
        try {
          const response: AxiosResponse<{ response: { hits: SearchResult} }> = await axiosInstance.get('/search', {
            params: {
              q: term,
            },
          });
          return response.data.response.hits;
        } catch (error) {
          throw new Error('Error searching documents on Genius API');
        }
      };



export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    
     const { q } = req.query;
     searchDocuments(q).then(
      (response) => {
        res.status(200).json(response);
      }
     ).catch((error)=>{
      res.status(200).json(error);

     })
    
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
