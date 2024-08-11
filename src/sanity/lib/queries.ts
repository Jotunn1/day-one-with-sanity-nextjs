// ./src/sanity/lib/queries.ts

import { groq } from "next-sanity";

export const EVENTS_QUERY = groq`*[_type == "event"]{_id, name, slug, date}|order(date desc)`;

export const EVENT_QUERY = groq`*[
    _type == "event" &&
    slug.current == $slug
  ][0]{
  name,
  date,
  headline,
  image,
  details,
  eventType,
  doorsOpen,
  venue,
  tickets,
  headline->,
  venue->
}`;
