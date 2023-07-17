import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
import { getToken } from "next-auth/jwt";
export { default } from 'next-auth/middleware'
import rateLimit from 'express-rate-limit'

import {
  verificationRules,
  companyName,
  companyLogo,
} from "./lib/customRules";


// import { ipRateLimit } from './lib/ip-rate-limit'


// export const config = {
//   runtime: 'edge',
// }

const secret = process.env.NEXTAUTH_SECRET;


const limiter = rateLimit({
   windowMs: 5 * 60 * 1000, // 5 minutes
   max: 0, // limit each IP to 1 requests per windowMs
    message: "Too many requests, please try again later",
    trustProxy: true, 
    keyGenerator: function(req) {
    return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  }
 });


function rateLimiter(req: NextApiRequest, res: NextApiResponse, next: Function) {
     
  limiter(req, res, next);
 }

 
// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
    
    try {       

        
        let path = req.url 

        const token = await getToken({ req, secret });
        
       
        // console.log("Token>>>>>", token);
        
        let userInfo = {}

        if (token)
        {
            let data = await getUserDetails(token.sub)
            userInfo = data.userInfo    
            
        }


        // Below Path's dont require authentication

        if (path == process.env.NEXT_PUBLIC_BASE_URL + "/login" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/register" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/forgot-password" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/reset-password" )
            // path == process.env.NEXT_PUBLIC_BASE_URL + "/confirm-email")
        {
            //Token exists - check role & redirect accordingly 

            if (token)
            {
                if (userInfo.user_id.role == "owner")
                {
                    return NextResponse.redirect(new URL('/', req.url))
                }    
            }
            
        }

        // Path requires authentication 

        if (path == process.env.NEXT_PUBLIC_BASE_URL + "/onboard")
        {
            if (!token)
            {
                return NextResponse.redirect(new URL('/login', req.url))
            }
            else 
            {
                let customRule = verificationRules.filter(e => e.role === userInfo.user_id.role)[0] 

                if (customRule.verify_revoke == true && userInfo.revoked_access == true)
                {
                    // User Access Revoked 
                    return NextResponse.redirect(new URL('/disabled', req.url))
                }
                else if (customRule.verify_email == true && userInfo.verified_email == false)
                {
                    // User Email Not Verified 
                    return NextResponse.redirect(new URL('/verify?type=email', req.url))
                }
                else if (customRule.verify_phone == true && userInfo.verified_phone == false)
                {
                    // User Phone Not Verified 
                    return NextResponse.redirect(new URL('/verify?type=phone', req.url))
                }
                else
                {
                    return NextResponse.next()
                }

            }
        }
        else if (path == process.env.NEXT_PUBLIC_BASE_URL + "/disabled")
        {
            if (!token)
            {
                return NextResponse.redirect(new URL('/login', req.url))
            }
            else 
            {
                let customRule = verificationRules.filter(e => e.role === userInfo.user_id.role)[0] 

                if (customRule.verify_revoke == true && userInfo.revoked_access == false)
                {
                    // User Access Revoked 
                    return NextResponse.redirect(new URL('/', req.url))
                }
                else
                {
                    return NextResponse.next()
                }

            }
        }
        else if (path == process.env.NEXT_PUBLIC_BASE_URL + "/verify?type=email" || path == process.env.NEXT_PUBLIC_BASE_URL + "/verify?type=phone")
        {
            if (!token)
            {
                return NextResponse.redirect(new URL('/login', req.url))
            }
            else 
            {
                let customRule = verificationRules.filter(e => e.role === userInfo.user_id.role)[0] 

                if (customRule.verify_revoke == true && userInfo.revoked_access == true)
                {
                    // User Access Revoked 
                    return NextResponse.redirect(new URL('/disabled', req.url))
                }
                else 
                {
                    return NextResponse.next()
                }

            }
       
        }
        
        
       
        else if (path == process.env.NEXT_PUBLIC_BASE_URL + "/" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/analytics" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/profile" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/billing" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/schoolinfo" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/category" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/subjects" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/classes" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/teachers" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/students" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/timetable" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/studentAttendance" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/teacherAttendance" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/exams" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/marks" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/feeStructure" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/feePayment" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/events" ||
            path == process.env.NEXT_PUBLIC_BASE_URL + "/alerts" 
            )
        {
            //Token exists - check role & redirect accordingly 

            if (!token)
            {
                return NextResponse.redirect(new URL('/login', req.url))
            }
            else
            {
                
                // Check Onboarding, Email & Phone Verification  
                
                // let userInfo = data.userInfo

                let customRule = verificationRules.filter(e => e.role === userInfo.user_id.role)[0]            

                // console.log("customRule>>>>>", customRule);
                // console.log("userInfo>>>>>", userInfo);
                
                if (customRule.verify_revoke == true && userInfo.revoked_access == true)
                {
                    // User Access Revoked 
                    return NextResponse.redirect(new URL('/disabled', req.url))
                }
                else if (customRule.verify_email == true && userInfo.verified_email == false)
                {
                    // User Email Not Verified 
                    return NextResponse.redirect(new URL('/verify?type=email', req.url))
                }
                else if (customRule.verify_phone == true && userInfo.verified_phone == false)
                {
                    // User Phone Not Verified 
                    return NextResponse.redirect(new URL('/verify?type=phone', req.url))
                }
                else if (customRule.verify_onboard == true && userInfo.onboarded == false)
                {
                    // User Hasn't Onboarded 
                    return NextResponse.redirect(new URL('/onboard', req.url))
                }
                // else if (userInfo.is_paid_user == false && new Date(userInfo.trial_expires) < new Date())
                // {
                //     // Trial Period has Ended  
                //     return NextResponse.redirect(new URL('/billing', req.url))
                // }
                else
                {
                    return NextResponse.next()
                }
            }
            
        }
        else if (path == process.env.NEXT_PUBLIC_BASE_URL + "/billing") {

            if (!token)
            {
                return NextResponse.redirect(new URL('/login', req.url))
            }
            else
            {
                return NextResponse.next()
            }
        }

        
        
    } catch (error) {
        
        console.log("error>>>>", error);
        return NextResponse.next()
    }
      
}


function getUserDetails(user_id)
{
  return new Promise(async (resolve, reject) => {
    
      
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"/api/userInfo?user_id="+user_id);
      const data = await response.json();
      
      resolve(data)
    
  }) 
}

// See "Matching Paths" below to learn more
export const config = {
    
    matcher: [

       '/',  '/login', '/verify/:path*', '/register', '/forgot-password', '/confirm-email',
        '/onboard', '/billing', '/disabled', '/analytics', '/dashboard', '/profile', 
        '/schoolinfo', '/category', '/subjects', '/classes', '/teachers', '/students', '/timetable',
        '/studentAttendance', '/teacherAttendance', '/exams', '/marks', '/feeStructure', '/feePayment',
        '/events', '/alerts'
        
    ],
    
} 

