---
layout: post
title: "Builder Beware: The Limitations of Popular APIs"
date: 2015-04-26 23:09:33 -0400
comments: true
categories: 
---
<br>
<h3>YouTube:</h3> 



Limit: 50,000,000 per day
or 30,000 per user per second
However there is a global quota pool.
That means that any user or ip-address associated with a specific project will decrement the global quota pool.

>In v3, there is a global quota pool (of 50 million units/day), and all API calls that are associated with a specific project in the Developers Console decrement quota from that pool. Therefore, it is theoretically possible for a single IP address or channel to consume all of the quota associated with an API registration, which could lead to an outage that affects other users. <a href="https://developers.google.com/youtube/2.0/deprecation_faq" target="_blank">Source</a>

`GET https://www.googleapis.com/youtube/v3/activities?part=snippet&maxResults=50&mine=true&key={YOUR_API_KEY}`

Would incur a quota cost of 3.

That means that every day a single project could get a maximum  of 833,333,335 likes from the YouTube API.  
(50,000,000/3) = 16,666,666 page results
16,666,666 * 50 liked videos per page 
=833,333,335 liked videos

*The real number of likes a project could get from the API each day would be less as various users would not make requests at the optimal 50 results per page.*

The take away from this section is that the YouTube API has given developers enough runway to onboard a meaningful amount of users before any quota limits are reached. Google has channels for developers to request additional limits as well, however that functionality seems to be temporarily suspended. 

<img src="/images/google_api.png" alt="google api notice" height="100%"width="100%">

<h3>Instagram</h3>

Instagram has a different approach then Youtube by allowing a local quota pool for each authenticated user of 5,000/hour per token. 

>We recommend that you use an Oauth token for the authenticated user for each endpoint, even in cases where it's not required, since the rate limit for authenticated calls scales as you grow the amount of people using your app. <a href="https://instagram.com/developer/limits/" target="_blank">Source</a>

Instagram usually returns between 21-23 liked photos per API call. The code below deprecates the hourly quota of 5,000 by 1. 

`GET/users/self/media/liked`

Theoretically, a single user could call between 105,000 and 115,000 liked photos per hour. However, Instagram will return an error if the API is called too frequently. Stating
>Be nice. If you're sending too many requests too quickly, we'll send back a 503 error code (server unavailable).

<h3>Spotify</h3>
Spotify does not have explicit rate limits defined in its API, however a few posts on their API forum yielded the following conversation with two Spotify developers.
<img src="/images/spotify_forum.png" alt="spotify developer forum" width="100%" height="100%">

In short, Spotify has vauge rate limits regarding their various endpoints. Authenitcated requests will have higher rate limits. However, all rate limits are on a per application basis. 

<h3>SoundCloud</h3>
I could not find any information regarding the rate limits of the Soundcloud API.Their documentation did have this to say...

>We reserve the right, at our discretion, to impose restrictions and limitations on the number and frequency of calls made by your app to the SoundCloud® API. You must not attempt to circumvent any restrictions or limitations that we impose.


<h3>Are APIs Limitless...?

<img src="/images/limitless.gif" alt="limitless">

...not quite.</h3>

<!--Talk about failed companies https://feedient.com/-->









