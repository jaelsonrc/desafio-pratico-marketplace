import { Outlet } from "react-router-dom";
import authImage from "../../assets/auth-image.svg";
import logo from "../../assets/logo.svg";

export function AuthLayout(){
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <img src={authImage} alt="" />
      </div>
      
      <div className="flex flex-col justify-center items-center">
        <Outlet/>
      </div>
    </div>
  )
}