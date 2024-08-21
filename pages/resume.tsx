import React from 'react'
import Bar from '../components/Bar'
import { languages, tools } from '../data'

const resume = () => {
return (
    <div className='p-2 px-6'>
        <div className="grid gap-6 md:grid-cols-2">
        <div>
        <h5 className="my-3 text-2xl font-bold">Education</h5>
        <div className="">
        <h5 className="my-2 ">
            Bachelor of Telecommunication Engineering
Tishreen University
09/2016 - 09/2022,
        </h5>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className="my-3">
            Master of Network Technology
Syrian Virtual University
01/2023 - Present,
        </p>
        </div>
    </div>
    <div>
        <h5 className="my-3 text-2xl font-bold">Experience</h5>
        <div className="">
        <h5 className="my-2 text-xl font-bold"> Front-End Developer</h5>
        <p className="font-semibold">Ejalo, Ajman UAE
                      12/2023 - 02/2023</p>
        <p className="font-base">ranslated UI/UX designs into high-performance front-end web
applications using ReactJS, TypeScript, and Next.js.<br></br>
Utilized modern web development tools including Git, Webpack, Redux, and
React Router.<br></br>
Implemented unit and widget tests, contributing to the overall robustness
of the application.<br></br>
Participated in daily Scrum meetings with a 5-member team to enhance
the development workflow.<br></br>
Achieved a 60% reduction in load time by optimizing icon usage from
Material icons to font-based icons</p>
        </div>
    </div>
        </div>
        <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Skills</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Soft Skills</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
</div>
)
}

export default resume