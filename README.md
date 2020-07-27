Art Gallery

## User Stories 

### as a user 
1: i should see a home page with all the pictures
2: the user can click on the picture 
3: after clicking on the picture the picture should expand to show likes and comments.
4: the user should be able to like pictures,
5: comment on pictures.
6: edit comments and delete comments 
7: give picture a rating.
8: user should be able to put pictures in favorites. 


## advanced stories
I should be able to login 
1: sort by like 
2: sort my favorites.

## models 


### user 
- name
- number 
- city

### favorite

### picture 
- title
- rating
- imageUrl 
- comment

### relationships
user has_many favorite 
favorite belongs_to user 

favorite has_many pictures
picture belongs_to favorites 

### Challenges you expect to face
- figuring out where to store the pictures 
- how to display the pictures 


### controller actions 
- new comment 
- edit comment 
- delete comment 



### structure of your JSON responses
### structure of your JSON responses
- GET picture from DB
- POST comments
- PATCH favorites & Comments & Likes
- DELETE favorites & Comments & Likes 






## User Stories + (features)
### as a user
1: i should see a home page with all the pictures
2: I should be able to login (login button)
3: after login I should be able to like pictures,(like button)
4: comment on pictures. (comment form???)
5: edit comments and delete comments (edit form? Delete button)
6: give picture a rating. (5 star System?)
7: I should be able to put pictures in favorites. (favorite button)


## advanced stories
1: sort by like
2: sort my favorites.
3: filter favorites
4: picture of the day 


## models
### user
- name
- number
- city

### favorite

### picture
- title
- like
- imageUrl


### relationships
user has_many favorite
favorite belongs_to user
user has_many pictures through favorite

favorite belongs_to pictures
picture has_many favorite
picture 

### controller actions
- new comment
- edit comment
- delete comment

### structure of your JSON responses
- GET picture from DB
- POST like 
- post favorites & Likes
- DELETE favorites & Comments & Likes 