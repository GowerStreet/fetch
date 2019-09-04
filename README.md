# Fetch

A simple convenience wrapper around Node.js's HTTP.get function. Takes a URL and a callback function.

If you need PUT, POST, DELETE, multi-part MIME uploads, or an of the rest of that jazz, you're better off using one of the many libraries like [request](https://www.npmjs.com/package/request).

## Usage

```clojure
(var fetch (require "@gowerstreet/fetch"))

(fetch "http://jsonplaceholder.typicode.com/todos/1"
       (# (data) (console.log "Look what I got!" (JSON.parse data))))
```

## TODO

* Support HTTPS
* Handle errors better. Or at all.

## License

MIT - see the [license file](LICENSE).
