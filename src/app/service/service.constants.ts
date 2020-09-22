export class ServiceConstants {
  public static appContext: string = "http://15.207.210.221:8080/tour/api/0.1";
  //public static appContext: string = "http://localhost:8080/tour/api/0.1";
  public static loginUrl: string =
    ServiceConstants.appContext + "/auth-service/login";
  public static checknewuserUrl: string =
    ServiceConstants.appContext + "/auth-service/user/validate";
  public static registerUserUrl: string =
    ServiceConstants.appContext + "/admin-service/public/registerUser";
  public static forgotPasswordUrl: string =
    ServiceConstants.appContext + "/auth-service/forgotpassword";
  public static changePasswordUrl: string =
    ServiceConstants.appContext + "/auth-service/forgotpasswordprocess";
}
