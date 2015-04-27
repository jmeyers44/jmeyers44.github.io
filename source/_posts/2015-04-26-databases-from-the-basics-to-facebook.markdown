---
layout: post
title: "Databases: FROM the basics TO facebook"
date: 2015-04-26 22:27:58 -0400
comments: true
categories: 
---
What is a database? If you had to guess would you say it's like a bunch of these...
<img src="/images/excel_sheet.png" alt="excel sheet">
<br>
...jammed into something that looks like this...
<br>
<br>
<img src="/images/Database_1.png" alt="database">
<br>


..that makes a magical data vortex?
<iframe src="//giphy.com/embed/v37chFjA54wHC?html5=true" width="600" height="360" frameBorder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

<br>
**Well**...that's not quite right. 

In this blog post we will take a look at the basic components of a database. As a beginner it is important to understand the fundamentals of databases, but it can also be helpful and even inspirational to see how some of the best minds and companies put these technologies to work.  

<h4>High Level Database Architecture</h4>

**Databases**: This is where you model your data. By and large, SQL based databases contain tables, indexes, views, stored procedures and triggers. This data is contained in a larger Database Management System(DBMS).

**Database Management System:** A DBMS is a collection of programs that enables you to store, modify, and extract information from a database. In addition to your data, these typically include programs responsible for security, query processing, a storage engine and a data dictionary. Examples of DBMS Models are Flat file, Hierarchical, Network, Relational and Object-Oriented. The relational model is the most commonly used today. 

**SQL**
Structured Query Language (SQL) is a special purpose programming language designed for handling data in a relational database management system. SQL was created in the 1970s  and commercialized by Oracle. Today open source resources like MySQL, PostgreSQL, SQLite and Firebird have helped SQL become one of the most popular database resources. Go check out the <a href=http://en.wikipedia.org/wiki/Query_language type=_blank>34 other query languages</a> on Wikipedia.

 **NoSQL**
NoSQL (or Not Only SQL) refers to a variety of database modeling techniques, including key-value, graph and document, that do not rely on tabular relations (data organized into rows and columns with a unique key for each row). It does not require fixed table schemas, avoids join operations by storing denormalized data, and are designed to scale horizontally. 

Now that we have a little context, lets take a look at how one of the best technology companies in the world handles its data. 
<h2>Facebook</h2>
Facebook delivers highly customized, real-time content to over 1 billion users. Various information types such as comments, likes, photos and videos must not only be served to their intended user, but must able to respond to spikes in requests should a specific piece of content go viral. To do this they use a highly customized version of MySQL. A conversation with two of Facebook's MySQL gurus details their thought process. 

A <a href="http://www.percona.com/blog/2014/03/27/a-conversation-with-5-facebook-mysql-gurus/" target=_"blank">conversation</a> with FB engineers Yoshinori Matsunobu & Mark Callaghan.

>Tom: Why MySQL? Wouldn’t NoSQL databases, for example, be better suited for the massive workloads seen at Facebook?

>Mark: MySQL is great for many of our important workloads. We make it even better with our expertise in MySQL operations and engineering, and by working with the community and learning from their experience.

>Yoshinori: I have not been able to find a transactional NoSQL database better than InnoDB. And it’s easy to understand how MySQL Replication works, which makes much easier to fix problems in production.

**Using the Graph API**
Facebook has a graph API (<a href="https://www.facebook.com/notes/facebook-engineering/tao-the-power-of-the-graph/10151525983993920" target="_blank">TAO</a>) that enables a user to access all of the social graph as if it were a large graph database. The power of a graph database is illustrated in the example from the FB API site below. 

Here's an example query that will retrieve up to five albums created by someone, and the last five posts in their feed.

`GET graph.facebook.com
  /me?
    fields=albums.limit(5),posts.limit(5)`

We can then extend this a bit more and for each album object, also retrieve the first two photos, and people tagged in each photo:

`GET graph.facebook.com
  /me?
    fields=albums.limit(5){name, photos.limit(2)},posts.limit(5)`

Now we can extend it again by retrieving the name of each photo, the picture URL, and the people tagged:

`GET graph.facebook.com
  /me?
    fields=albums.limit(5){name, photos.limit(2){name, picture, tags.limit(2)}},posts.limit(5)`

You can see how field expansion can work across nodes, edges, and fields to return really complex data in a single request. <a href="https://developers.facebook.com/docs/graph-api/using-graph-api/v2.3" target="_blank">Source</a>

I found the example above fascinating and illuminating. Up until this point I have only interacted with SQL and relied on joins to match data from one table to corresponding data in another table. The graph database provides an almost intuitive query flow to access information. Check out some of the resources below for more on how Facebook's engineers keep the world's largest social network up and running.  




*Additional Reading*  
Chip Turner, FB Engineering Manager <a href="http://www.percona.com/live/mysql-conference-2014/sites/default/files/slides/Percona%20Live%202014.pdf" type=_blank>DB Presentation</a>
<a href="https://www.facebook.com/notes/facebook-engineering/tao-the-power-of-the-graph/10151525983993920" type=_blank>TAO: The Power of the Graph</a>

**BONUS GLOSSARY**

<a href=http://en.wikipedia.org/wiki/ACID target="_blank">**ACID**</a> (Atomicity, Consistency, Isolation, Durability): This acronym is a set of properties that can guarantee that database transactions are processed reliably. **Atomicity** refers to a database transaction where either all operations occur or none occur. This is critical to prevent partial database updates. **Consistency** refers to a set of defined ruls that any given database transaction must follow. While it does not mean that a transaction will be error free, it does mean that the error cannot be the result of a violation of defined rules. **Isolation** is a general measure of users ability to access data concurrently. **Durability** is the requirement that committed transactions will survive even in the event of a system crash.




*NOTE: This was a very high level overview. If you have interest in diving into any of these topics some interesting subjects are <a href="http://en.wikipedia.org/wiki/Object-relational_impedance_mismatch" target_blank>Object-relational impedance mismatch</a>, <a href="http://en.wikipedia.org/wiki/Relational_model" target=_blank>The Relational Model</a> or any of the resources linked in the body of this post.*