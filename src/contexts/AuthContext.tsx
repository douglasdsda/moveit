import Cookies from 'js-cookie';
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react'
 
import { APIRepo, APIUser } from "../@types";

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

interface AuthProviderProps {
  children: ReactNode
}
interface AuthContextProps {
  isHasData: boolean
  userData: {
    name: string
    avatar_url: string
    email: string
  }
  registerUser: (name: string) => void
 
}

export const AuthContext = createContext({} as AuthContextProps)

export const useAuth = () => useContext(AuthContext)

 

export function AuthProvider({ children }: AuthProviderProps) {
  const [hasData, setHasData] = useState(false)
  const [userData, setUserData] = useState<Data>(undefined)

   
  // const [data, setData] = useState<Data>();
  const [username, setUserName] = useState('');

  useEffect(() => {

    
    if(!username) return 

    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      // console.log([await responses[0].json(), await responses[1].json()]);
      const [userResponse, resposResponse] = responses;
      if (userResponse.status === 404) {
        setUserData({ error: "User not found!" });
        return;
      }

      const user = await userResponse.json();
      const repos = await resposResponse.json();
      console.log('user: ', user)
      console.log('repos: ', repos)
  
   
      setUserData({
        user
      });
      setHasData(true)
    });
  }, [username, setUserData, setHasData]);

  const registerUser = useCallback(async (name) => {
  Cookies.set('register_username', name)
   setUserName(name)
 
  }, [setUserName])
  
  return (
    <AuthContext.Provider
      value={{
        isHasData: hasData,
        userData: {
          name: userData?.user?.name,
          avatar_url: userData?.user?.avatar_url,
          email: userData?.user?.email
        },
        registerUser,
     
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}