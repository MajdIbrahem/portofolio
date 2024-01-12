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
    I am Majd 25 Years Old, Fresh graduated Telecommunication engineer and self motivated junior front end develope
for an opportunity to show and develop my skills with a strong team by building innovative and cutting edge busin
      solutions both in local and global scopes</h5>
    <div className='p-4 mt-5  '>
      <h6 className='my-3 text-xl font-bold tracking-wide'>My Skills</h6>
      <div className='grid lg:grid-cols-2 gap-6'>
        {services.map(service => {
        return <ServiceCard key={service.title} service={service}></ServiceCard>
      }) }</div>
    </div>
  </div>
  )
}

export default Home
