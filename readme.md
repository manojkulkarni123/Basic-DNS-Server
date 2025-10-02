# my-dns-server

A minimal UDP DNS server written in Node.js that responds from a small in-memory record set.

---

## 📦 Packages Used

* `dns-packet` — DNS message encoding/decoding
* Node's built-in `dgram` — raw UDP sockets

---

## ✨ Features

* UDP DNS server bound to **127.0.0.1:5354**
* DNS message parsing/encoding via `dns-packet`
* Simple in-memory DNS database in `index.js`
* Example records for `A` and `CNAME` types

---

## 🔧 Prerequisites

* Node.js **v14+**

Install dependencies:

```
npm install
```

---

## 🚀 Run

From the project root:

```
node index.js
```

You should see:

```
UDP Server is running on port 5354
```

---

## 🔍 Query Examples

Using `dig`:

**A record:**

```
dig @127.0.0.1 -p 5354 manojk.og A
```

**CNAME record:**

```
dig @127.0.0.1 -p 5354 blog.manojk.og CNAME
```

---

## 🗂️ Data Format

Records are defined in the `db` object inside `index.js`.

Example:

```
'manojk.og': {
  type: "A",
  data: "67.1.1.1"
},
'blog.manojk.og': {
  type: "CNAME",
  data: "67.1.1.2"
}
```

---

## 📌 Notes

This is a very basic implementation of a DNS Server and is a **work in progress** mainly for understanding the depth of the internet.
