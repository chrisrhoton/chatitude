##Maker Square assignment

**Objective**: build a Javascript front-end to interface with a remote API.

**Original Spec**:

>In this project you will be using JavaScript and jQuery to build an HTML frontend for an open chat server. In short you will implement:

> - A chat view
> - A signup form
> - A signin form
> - A "send chat message" form

**TO DO** 
  - Waiting on server-side fix for problem with getting all chats 'since'
    - Will allow for "real-time" updates.  **Interim Solution**: Refreshing all chats every second.
  - ~~Need to handle sign-up errors (e.g. - when username already exists)~~
    - **Done** - at least the first implementation.  Could be improved.
  - ~~Same with sign-in errors~~
    - **Done** - a bit of a hack.  Could be improved.
  - Could do more with the slider menu.  Just displays username right now.
    - Could integrate it with the interface code.
  - ~~Display images from chats~~
    - Basic implementation in place.
      - New problem: chat "message" content is not escaped.  Need to work on that.
      - Could add better styling of images.  Maybe generate thumbnails with a link
        to original image?

