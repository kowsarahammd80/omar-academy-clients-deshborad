import React from 'react';
import AcademyProgress from '../AcademyProgress/AcademyProgress';
import PreparationforJobs from '../PreparationforJobsProgress/PreparationforJobs';
import UniversityTestAdmissionProgress from '../UniversityTestAdmissionProgress/UniversityTestAdmissionProgress';
import UserProgress from '../UserProgress/UserProgress';

const Dashboard = () => {

  return (

    <div className=''>

       <div className='mt-5 lg:mt-10 mb-5 lg:mb-14 text-center lg:text-start'>

           <h1 className='text-2xl lg:text-4xl font-semibold'>Course Progress</h1>

       </div>

        
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

          {/* academy progress */}

             <div>
                 
                <AcademyProgress/>

             </div>

          {/* University Test Admission */}

          <div>
              
              <UniversityTestAdmissionProgress/>

          </div>

          {/* job  */}

          <div>
              <PreparationforJobs/>
          </div>
           
        </div>


     {/* User */}

        <div className='mt-5 lg:mt-10 mb-5 lg:mb-10'>

               <h1 className='text-2xl lg:text-4xl font-semibold'>User Progress</h1>          
          
        </div>

   {/* user progress */}

        <div className='mx-5'>
           
            <UserProgress/>

        </div>


    </div>

  );

};

export default Dashboard;