# 🖼️ Instafeed-Lite

[![Greenkeeper badge](https://badges.greenkeeper.io/JeromeFitz/instafeed-lite.svg)](https://greenkeeper.io/)
> A dead simple way to get data from Instagram (inspired by [Instafeed.js](https://github.com/stevenschobert/instafeed.js))

No {{templating}}. Just returns the top-level object from Instagram.
Do with it, what you will.

## 👩‍💻️ Install:
```shell
yarn add instafeed-lite
```
### Render
Call it:
```javascript
  instafeed({
      limit: "5",
      resolution: "standard_resolution",
      sortBy: "most-recent",
      get: "user",
      userId: "userIdInstagramApiString",
      clientId: "clientIdInstagramApiString",
      accessToken: "accessTokenInstagramApiString"
    });
  )
```
** 📓️ Note:** May need to `import` / `require` / etc. Using `react`? Check out [`react-instafeed`](https://github.com/JeromeFitz/react-instafeed).

### 📓️ Notes:

#### Variables

- `limit` - Maximum number of Images to add.
- `resolution` -  Size of the images to get. Available options are:
- - `thumbnail` (**default**) - 150x150
- - `low_resolution` - 320x320
- - `standard_resolution` - 640x640
- `sortBy` - Sort the images in a set order. Available options are:
- - `none` (**default**) - As they come from Instagram.
- - `most-recent` - Newest to oldest.
- - `least-recent` - Oldest to newest.
- - `most-liked` - Highest # of likes to lowest.
- - `least-liked` - Lowest # likes to highest.
- - `most-commented` - Highest # of comments to lowest.
- - `least-commented` - Lowest # of comments to highest.
- - `random` - Random order.

#### Variable Return
Per item...
- attribution
- caption
- - created_time
- - from
- - id
- - text
- comments
- - count
- created_time
- filter
- id
- images ***(for:*** *low_resolution, standard_resolution, thumbnail**)***
- - height
- - url
- - width
- likes
- - count
- link
- location
- tags
- type
- user
- - full_name
- - id
- - profile_picture
- - username
- user_has_liked
- users_in_photo

#### Further Documentation
- http://instafeedjs.com/
- https://github.com/stevenschobert/instafeed.js

As well as a breakdown of some advanced functionality in this issue:
- https://github.com/stevenschobert/instafeed.js/issues/21

#### API
`instafeed.js` is client facing library, so your API Keys and the like kind of need to be in the code to work. If there is a more secure way of doing this, please submit an Issue / Pull Request / etc.

These are set explicitly in this example, however, in my usual build process I have been using [babel-plugin-transform-define](https://github.com/FormidableLabs/babel-plugin-transform-define).

**Before:**
```javascript
userId='userIdInstagramApiString'
clientId='clientIdInstagramApiString'
accessToken='accessTokenInstagramApiString'
```
**After:**
```javascript
userId={`${__INSTAGRAM_USER_ID__}`} // eslint-disable-line no-undef
clientId={`${__INSTAGRAM_CLIENT_ID__}`} // eslint-disable-line no-undef
accessToken={`${__INSTAGRAM_ACCESS_TOKEN__}`} // eslint-disable-line no-undef
```

If you are using [react-scripts](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts), add your keys to your `.env` file with the `REACT_APP_` precursor:

```javascript

userId={`${process.env.REACT_APP_INSTAGRAM_USER_ID}`}
clientId={`${process.env.REACT_APP_INSTAGRAM_CLIENT_ID}`}
accessToken={`${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`}
```

** 📓️ Note:** Technically your API Keys are not in your Repo, however, they will still absolutely be in your end build javascript.

## 🙌 Props
Super props to the Instafeed, Instagram, and React teams.

## ❤️ "Legal"
This software is provided as-is, and all that usually lovely stuff.
