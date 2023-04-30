### weCare's APIs Documentation

Full URLs are provided in responses they will be rendered as if service is running on 'http://localhost:7000/'.

## Open Endpoints

Open endpoints require no Authentication.

- [Login](users/login.md) : `POST /api/v1/users/login/`
- [Register](users/register.md) : `POST /api/v1/users/signup/`
- [Get All Providers](providers/getAllProviders.md) : `GET /api/v1/providers/`

<br/>

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

### Users Related

- [Get All Users](users/getAllUsers.md) : `GET /api/v1/users/`
- [Get User By ID](users/getUserById.md) : `GET /api/v1/users/:id/`
- [Update User By ID](users/updateUserById.md) : `PATCH /api/v1/users/:id/`
- [Delete User By ID](users/deleteUserById.md) : `DELETE /api/v1/users/:id/`
- [Get All Requests](users/getAllRequests.md) : `GET /api/v1/request/`
- [Get Request By ID](users/getRequestById.md) : `GET /api/v1/user/:id/`
- [Get All Reviews](users/getAllReviews.md) : `GET /api/v1/reviews/`
- [Get User Profile](users/getUserProfile.md) : `GET /api/v1/profile/:id/`
- [Get Highest Rating](users/getHighestRating.md) : `GET /api/v1/users?rating[gte]=4.8/`
- [Get Lowest Rating](users/getLowestRating.md) : `GET /api/v1/users?rating[lte]=2/`

### Providers Related

- [Get Provider By ID](providers/getProviderById.md) : `GET /api/v1/providers/:id/`
- [Update Provider By ID](providers/updateProviderById.md) : `PATCH /api/v1/providers/:id/`
- [Delete Provider By ID](providers/deleteProviderById.md) : `DELETE /api/v1/providers/:id/`
- [Get Highest Rating](providers/getHighestRating.md) : `GET /api/v1/providers?rating[gte]=4.8/`
- [Get Lowest Rating](providers/getLowestRating.md) : `GET /api/v1/providers?rating[lte]=2/`
- [Get Five Lowest Paid](providers/getLowest5Paid.md) : `GET /api/v1/providers?sort=hourlyRate&limit=5/`
- [Get Five Highest Paid](providers/getHighest5Paid.md) : `GET /api/v1/providers?sort=-hourlyRate&limit=5/`
