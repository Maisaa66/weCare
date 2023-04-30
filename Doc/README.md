### weCare's APIs Documentation

Full URLs are provided in responses they will be rendered as if service is running on 'http://localhost:7000/'.

## Open Endpoints

Open endpoints require no Authentication.

- [Login](users/login.md) : `POST /api/v1/users/login`
- [Register](users/register.md) : `POST /api/v1/users/signup`
- [Get All Providers](providers/getAllProviders.md) : `GET /api/v1/providers`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

### Users Related

- [Get All Users](users/getAllUsers.md) : `GET /api/v1/users`
