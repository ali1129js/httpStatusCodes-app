import uuid from "react-uuid";

export const deck2xx = [
  {
    id: uuid(),
    front: "200",
    back: "OK",
    more: "The request has succeeded",
  },
  {
    id: uuid(),
    front: "201",
    back: "Created",
    more:
      "The request has been fulfilled, resulting in the creation of a new resource.",
  },
  {
    id: uuid(),
    front: "202",
    back: "Accepted",
    more:
      "The request has been accepted for processing, but the processing has not been completed.",
  },
  {
    id: uuid(),
    front: "203",
    back: "Non-Authoritative Information ",
    more:
      "The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin's response.",
  },
  {
    id: uuid(),
    front: "204",
    back: "No Content",
    more:
      "The server successfully processed the request, and is not returning any content.",
  },
  {
    id: uuid(),
    front: "205",
    back: "Reset Content",
    more:
      "The server successfully processed the request, asks that the requester reset its document view, and is not returning any content.",
  },
  {
    id: uuid(),
    front: "206",
    back: "Partial Content",
    more:
      "The server is delivering only part of the resource (byte serving) due to a range header sent by the client. The range header is used by HTTP clients to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams.",
  },
  {
    id: uuid(),
    front: "207",
    back: "Multi-Status",
    more:
      "The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.",
  },
  {
    id: uuid(),
    front: "208",
    back: "Already Reported",
    more:
      "The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.",
  },
  {
    id: uuid(),
    front: "226",
    back: "IM Used",
    more:
      "The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
  },
];
