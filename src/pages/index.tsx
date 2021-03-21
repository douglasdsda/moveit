import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/router'
 
 
import HomeTemplate from '../templates/Home'
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
 
export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const { level, currentExperience, challengesCompleted } = req.cookies;

  if (!level || !currentExperience || !challengesCompleted)
    return { props: {} };

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

 

export default function Home() {
  const { isHasData } = useAuth()
  const router = useRouter()


  useEffect(() => {
     if(isHasData){
      router.push('/dashboard')
     }
  }, [isHasData])

  return (
    <>
      {  <HomeTemplate register_username='' />}
      {/* {userData === null ? <HomeTemplate /> : <DashboardTemplate />} 

      {/* {userData === null && <HomeTemplate />} */}
    </>
  )
}