import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"

export const {handlers,signIn,signOut,auth} = NextAuth({
   providers:[
    GithubProvider({
        clientId:process.env.GITHUB_CLIENT_ID,
        clientSecret:process.env.GITHUB_CLIENT_SECRET
       }),
      Google({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SCERET
      }),
      Facebook({
         clientId: process.env.AUTH_FACEBOOK_ID,
         clientSecret: process.env.AUTH_FACEBOOK_SECRET

      })
        
        
   ]
})

