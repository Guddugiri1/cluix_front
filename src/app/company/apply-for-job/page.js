// DEFINE ALL EXTERNAL IMPORT 
import LoaderComponets from '@/components/LoaderComponets/LoaderComponets';
import dynamic from 'next/dynamic'
import React, { Suspense } from "react";
// DEFINE ALL INTERNAL IMPORT 
const ApplyForJob = dynamic(() => import('../../../components/ApplyForJob/ApplyForJob'))

// DEFINE AMIN FUNCTIONS
const page = () => {
  // DEFINE MAIN FUNCTION RETURN 
  return (
    <Suspense fallback={<><LoaderComponets /></>}>
      <ApplyForJob />
    </Suspense>
  );
};

// DEFINE MAIN FUNCTION EXPORT
export default page;
