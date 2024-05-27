export default interface IApiResponse {
  status: number
  data?: any
  resp: "Success" | "ServerError"
}