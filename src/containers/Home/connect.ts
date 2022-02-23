import axios from 'axios';
import { useQuery } from 'react-query';

const useConnect = () => {
  const { data: posts } = useQuery('posts', async () => {
    const { data } = await axios(
      'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type&limit=6&access_token=IGQVJYLTdCejYtb21kaDRJbW0taE1iMDBiLWtFQUhOQ0g2WE5VQnpqNmp0UnRHZAmlDWEFhbjF1Ti12ZAGJ0X19JaDh3TThRQUMtMjNPaDlEY3NBQUl5cjl5X3M4VEVzNFRFbFU1SW1HcjJEdlFZAa3JXagZDZD',
    );
    return data;
  });

  return {
    posts,
  };
};

export default useConnect;
