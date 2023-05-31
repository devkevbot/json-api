# json-api

A JSON API that provides mock data for local testing

## Routes

| Route          | Description                                                            |
| -------------- | ---------------------------------------------------------------------- |
| `/person`      | Returns a random person with a full name, bio, job, and email address. |
| `/company`     | Returns a random company with a name and catch phrase.                 |
| `/lorem-ipsum` | Returns random Lorem Ipsum text with a title and description.          |

## Examples

### Person

```json
{
  "fullName": "Shawna Ward",
  "bio": "founder, writer",
  "job": "Customer Solutions Consultant",
  "email": "Diana31@hotmail.com"
}
```

### Company

```json
{
  "name": "Lang - Kshlerin",
  "phrase": "Cross-group client-server initiative"
}
```

### Lorem Ipsum

```json
{
  "title": "Quidem a illum.",
  "description": "Maiores inventore natus maiores optio in id. Quaerat asperiores deleniti doloremque nemo occaecati nam nostrum iusto. Dolor inventore voluptatibus labore."
}
```
