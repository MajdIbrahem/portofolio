import { GetServerSidePropsContext,GetServerSideProps, GetStaticProps, GetStaticPropsContext, } from 'next'
import ServiceCard from '../components/ServiceCard';
import { services } from "../data";
import { Services } from "../type";

// export const getStaticProps: GetStaticProps = async () => {

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()
  
//   return {
//     props: {services: data.services }
//   }
// }

const Home = () => {
  console.log('ll',services)
  return (<div className='flex flex-col px-6 pt-1'>
    <h5 className='my-3 font-medium'>
    Motivated Front-End Developer with a Bachelor’s in Telecommunication Engineering and over a year of hands-on experience in creating responsive web
applications. Proficient in ReactJS, TypeScript, and Next.js, with a strong ability to convert UI/UX designs into functional code. Demonstrates effective
collaboration with cross-functional teams and an eagerness to contribute to both local and global projects.</h5>
    <div className='p-4 mt-5  '>
      <h6 className='my-3 text-xl font-bold tracking-wide text-center'>My QUALIFICATIONS</h6>
      <div className='grid lg:grid-cols-2 gap-6'>
        {services.map(service => {
        return <ServiceCard key={service.title} service={service}></ServiceCard>
      }) }</div>
    </div>
  </div>
  )
}

export default Home
