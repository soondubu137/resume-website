# go-url-shortener

This *educational* project demonstrates the implementation of a basic URL shortener service in [Go](https://go.dev/).

## Introduction

A URL shortener creates a short URL from a long URL (i.e. the "original URL"). Users click on the short URL, and they will be redirected to the corresponding long URL. For example, an awfully long URL can possibly look like:

```
https://www.some-shopping-platform.com/items/2wjkasA98SAa21l34Wuzq16?promotion=black-friday&coupon=BLACK2024&referral=66e38ObAd&...
```

This not only looks horrible, but it can also lead to problems such as exceeding message length restriction or incurring additional SMS costs. A URL shortener can transform it to something more manageable:

```
https://ssp.com/iLw26qfeV
```

This project demonstrates the implementation of a basic version of such a URL shortener.

## Project Architecture

The project contains the following essential components:

- A server providing URL shortening service
  - Unique ID generator
- A server providing redirection service
  - Bloom filter
  - Local cache
- URL mapping store

## Technologies & Tools

- In this project, we use [go-zero](https://github.com/zeromicro/go-zero) as the development framework. Note that in this project, we use RESTful API instead of RPC.

  > Be an engineer, not a frameworker.

- Unique ID generator is implemented with the auto-increment primary key of a single MySQL table. This is an easy but not-so-scalable solution; in a more traffic-heavy (i.e. production) scenario, one should use a more scable solution such as MySQL sharding or a distributed [snowflake ID](https://en.wikipedia.org/wiki/Snowflake_ID) generator.

- Bloom filter: integrated by go-zero.

- Local cache: Redis.

- URL mapping store: MySQL. In this project, we simply use [sqlx](https://github.com/jmoiron/sqlx) to write pre-compiled SQL statements to do CRUD. This is because a URL shortener has a relatively easier database scheme. As the database gets more complicated, one would typically use an ORM framework such as [GORM](https://github.com/go-gorm/gorm).

- API testing: [Bruno](https://github.com/usebruno/bruno).

## Features

- URL shortening

  - Verification

    Before a URL is admitted for shortening, we first perform the following verifications.

    1. Connection test: if the URL is unreachable, we do not process it.
    2. Existence test: if the URL has already been shortened, we do not process it.
    3. Cyclic test: if the URL is itself a shortened URL, we do not process it. This prevents cyclic conversion, i.e. a URL is shortened, then the result is again shortened, then the result is again shortened...

  - Unique ID generation

    This is implemented with the auto-increment primary key of a single MySQL table.

  - Shortened URL generation

    This is implemented with randomized base-62 conversion on the previously generated unique ID.

- Redirection

  - Redirection is achieved by returning status code 302.

    > [!NOTE]
    >
    > We use 302 instead of 301 to force every redirection to go through our redirection server (by preventing browser cache). This can make the analytics service (which does *not* exist in this project) more accurate.

  - Performance improvement

    This is achieved by adding a cache layer between the redirection server and the URL mapping store. Since a URL shortener service is a typical more-read-less-write service, it is essential to separate read from write to significantly improve performance.

  - Cache Penetration

    To mitigate cache penetration, we use a bloom filter.

  - Cache Breakdown

  - To mitigate cache breakdown, we use singleflight (already integrated in go-zero).

## Learning Outcomes

Through this project, I

- gained practical experience with Go,
- gained familiarity with MySQL and Redis operations,
- gained familiarity with go-zero (RESTful API),
- gained familiarity with cache, its common problems, and possible mitigations,
- gained familiarity with the basic designs of a unique ID generator,
- understood the inner workings of a URL shortener,
- accumulated project design and development experience.

## Extensions

Here I list some potential extensions to this project and my plan about implementing them.

| Extension              | Explanation                                                  | Planned | Impl'ed |
| ---------------------- | ------------------------------------------------------------ | ------- | ------- |
| Authentication         | Users must authenticate themselves when they try to invoke the URL shortener service (e.g. with JWT). | N       |         |
| Special word Avoidance | Impolite or reserved words should be avoided in the shortened URL. | Y       | N       |
| Customization          | Users can have the ability to customize the shortened URL.   | Y       | N       |
| Expiration             | A shortened URL can be assigned (either by default or by the creator) an expiration date. | Y       | N       |

## References

1. This project is based on Wenzhou Li's microservices course.
2. https://go-zero.dev/en/

3. https://www.pixelstech.net/article/1586522853-What-is-cache-penetration-cache-breakdown-and-cache-avalanche

4. S. Chiang, *Hacking the System Design Interview: Real Big Tech Interview Questions and In-depth Solutions*. Studious Press LLC, 2022.