import { request } from 'umi'

export  const  InfoList=()=>{
  return request(
   "/api/user_info"
)
}
