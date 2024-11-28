import { SeSSionWrapper } from "@/components/sessionWrapper";
import Login from "@/components/login/login";
import SignOut
 from "@/components/login/signOut";
import {auth} from "@/lib/auth"

export default async function Home() {
  const session = await auth()
  const isAuthennticated = !!session?.user
  return (
    <SeSSionWrapper>
      {isAuthennticated?<SignOut/>:<Login/>}
      
    </SeSSionWrapper>
  );
}