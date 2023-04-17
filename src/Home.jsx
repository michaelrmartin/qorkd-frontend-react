import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { useState } from "react";

export function Home() {
  const [posts, setPosts] = useState([
    {
      "id": 1,
      "user_id": 20,
      "wine_id": 5,
      "wine_name": "Barrel Heist Bourbon Barrel Aged Cabernet Sauvignon",
      "description": "Qui at eum ut.",
      "rating": 4,
      "post_img_url": "https://loremflickr.com/300/300/wine,glass/all",
      "friendly_created_at": "April 12, 2023",
      "friendly_updated_at": "April 12, 2023"
      },
      {
      "id": 2,
      "user_id": 15,
      "wine_id": 33,
      "wine_name": "Floriana Grüner Veltliner",
      "description": "Libero consequatur excepturi magni.",
      "rating": 4,
      "post_img_url": "https://loremflickr.com/300/300/wine,glass/all",
      "friendly_created_at": "April 12, 2023",
      "friendly_updated_at": "April 12, 2023"
      },
      {
      "id": 3,
      "user_id": 19,
      "wine_id": 17,
      "wine_name": "Domaine de la Vauvise Sancerre",
      "description": "Ea voluptatem sed necessitatibus.",
      "rating": 1,
      "post_img_url": "https://loremflickr.com/300/300/wine,glass/all",
      "friendly_created_at": "April 12, 2023",
      "friendly_updated_at": "April 12, 2023"
      },
      {
      "id": 4,
      "user_id": 13,
      "wine_id": 19,
      "wine_name": "Château de Seguin Bordeaux Supérieur",
      "description": "Dolorem quas eaque perferendis.",
      "rating": 3,
      "post_img_url": "https://loremflickr.com/300/300/wine,glass/all",
      "friendly_created_at": "April 12, 2023",
      "friendly_updated_at": "April 12, 2023"
      }
  ])

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
