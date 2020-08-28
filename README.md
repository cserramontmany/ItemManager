# ItemManagerApp Carles Serramontmany test-app

I use bootrsrap to get an advantage on the styling, my plan was keeping it simple and clear. 

I've had a look on wallapop website ( desktop and smartphone) and my choice for the items was to render them like cards design. 
- Cards aren't with a fixed height: 
    - I was asked to show all the information, my first choice was to use ngx-masonry i was looking nice but filters weren't applied as I was expecting. Same for the images. 
    - My resolution was to render with cards with auto height. and use css flex. 

getting elements by groups of 5: 
    - I've achived that to get all of them stored in an array, then move them to the render array when asked. It was a problem because the link endpoint always send 20 elements. and when I wanted to get by groups of 5, I already had all of them when i subscribe. then I decided to use them "as it is". And also filtering and sorting could be difficult.  

In the service I  call to change the type of Items to ItemsFavorite: this is the same type but it has the favoureite boolean; 

I also forced the cards to certain width, this way I have the control of how will be distributed in each row and how many of them will be in each breakpoint. 

FilterPipe : on the top part of the ItemManagerComponent, there's a filter input, it filter on every field of the component and if user wants to only filter on one filed it can be choosen on the next dropdown field. I decided to build this pipe to have the control fields to filter. 
It would be nice to filter by price range, but I think this was going far from what I was asked for. 


In the ItemFavourite modal : my choice to "dislike" items from this list was with the icon heart. Following same rules of the main page. I added some fallback text for if the user disliked all elements. I thought closing the modal without telling to the user would be little bit agressive. 


# ItemManagerApp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

