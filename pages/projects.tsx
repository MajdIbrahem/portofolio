import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { myProjects } from '../data'

const Projects = () => {
    const [showDetails,setShowDetails]=useState<number|null>(null)
return (
    <div className='p-4'>
        <div className='grid grid-cols-12 gap-4  my-3 relative'>
            {myProjects.map(project => {
                return <div key={project.id} className='col-span-12 sm:col-span-6 lg:col-span-4 '>
                    <ProjectCard project={project} showDetails={showDetails} setShowDetails={setShowDetails} ></ProjectCard>
                </div>
            })}
        </div>
</div>
)
}

export default Projects