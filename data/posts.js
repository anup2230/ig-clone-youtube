import { USERS } from "./users";

export const POSTS = 
[
    {
      "post_id": 1,
      "user": USERS[0].User,
      "image_url": "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBzdW5zZXR8ZW58MHx8MHx8fDA%3D",
      "likes": 152,
      "caption": "A beautiful sunset over the ocean",
      "profile_picture": USERS[0].Image,
      "comments": [
        {"user": "user123", "comment": "Stunning view!"},
        {"user": "traveler98", "comment": "I wish I was there!"}
      ]
    },
    {
      "post_id": 2,
      "user": USERS[1].User,
      "image_url": "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/4/2/1427992630854/ff6dcf7a-58dc-4d29-a999-b2cc41c0443e-2060x1236.jpeg?width=700&quality=85&auto=format&fit=max&s=a9bf21e5ac0236be75c20ff5a04a36f2",
      "likes": 89,
      "caption": "Exploring the ancient ruins",
      "profile_picture": USERS[1].Image,
      "comments": [
        {"user": "historybuff", "comment": "This place looks amazing!"},
        {"user": "adventureseeker", "comment": "Adding this to my bucket list."}
      ]
    },
    {
      "post_id": 3,
      "user": USERS[2].User,
      "image_url": "https://www.parkway25.com/wp-content/uploads/2019/07/AdobeStock_165614761.jpeg",
      "likes": 75,
      "caption": "Morning jog in the park",
      "profile_picture": USERS[2].Image,
      "comments": [
        {"user": "fitgal", "comment": "Great way to start the day!"},
        {"user": "runnerlife", "comment": "Love this park, I run here often."}
      ]
    },
    // ... continue with additional posts ...
  ]
  