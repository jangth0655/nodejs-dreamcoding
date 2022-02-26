import dotenv from "dotenv";
dotenv.config();


// 설정한이유 
// 환경변수에서 값을 읽어온다. - 터미널에서 환경변수 설정만 하면 언제든지
function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue
  if(value === null) {
    throw new Error(`key ${key} is undefined`)
  }
  return value
}

export const config = { 
  jwt : {
    secretKey = required('JWT_SECRET'),
    expiresInSec = parseInt(required('JWT_EXPIRES', 86400))
  },
  bcrypt : {
    saltRounds =parseInt(required('BCRYPT_SALT_ROUNDS',12))
  },
  host:{
    port : parseInt(required(`HOST_PORT`,8080))
  }
}